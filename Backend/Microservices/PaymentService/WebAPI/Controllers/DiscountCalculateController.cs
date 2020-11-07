using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebAPI.Models;
using WebAPI.Helper;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System.Runtime.Serialization.Json;
using System.IO;
using Newtonsoft.Json;
using JsonSerializer = Newtonsoft.Json.JsonSerializer;
using Newtonsoft.Json.Serialization;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/DiscountCalculate")]
    [ApiController]
    //[Produces("application/json")]
    public class DiscountCalculateController : Controller
    {
        public IConfiguration Configuration { get; }
        public DiscountCalculateController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // GET: api/<DiscountCalculateController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DiscountCalculateController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DiscountCalculateController>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //IEnumerable<DiscountCalculator>
        public JsonResult Post([FromBody] DiscountCalculator discountCalculatorObj)
        {
            string connectionString = Configuration.GetValue<string>("ConnectionStrings:DevConnection");
            List<DiscountCalculator> listDiscountCalculators = new List<DiscountCalculator>();
            decimal priceAfterDiscount = decimal.Zero;
            int isActiveCoupon = 0;
            DiscountCalculator discountCalculator = new DiscountCalculator(
                    Convert.ToDecimal(discountCalculatorObj.BaseAmount),
                    Convert.ToString(discountCalculatorObj.CouponCode),
                    Convert.ToDecimal(priceAfterDiscount),
                    isActiveCoupon
                    );
            listDiscountCalculators.Add(discountCalculator);

            DiscountCalculation discountCalculation = new DiscountCalculation();
            discountCalculation.FetchDiscountValue(listDiscountCalculators, connectionString);

            DataContractJsonSerializer js = new DataContractJsonSerializer(typeof(DiscountCalculator));
            MemoryStream msObj = new MemoryStream();
            js.WriteObject(msObj, discountCalculator);
            msObj.Position = 0;
            StreamReader sr = new StreamReader(msObj);

            var json = JsonConvert.DeserializeObject(sr.ReadToEnd());
            sr.Close();
            return Json(json);
        }

        // PUT api/<DiscountCalculateController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DiscountCalculateController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
