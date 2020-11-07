using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WebAPI.Helper;
using WebAPI.Models;
using AWSSQS.Helper;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        public IConfiguration Configuration { get; }
        public OrderController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // GET: api/<OrderController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OrderController>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public JsonResult Post([FromBody] OrderTransactionDetails orderTransactionObj)
        {
            AWSSQSCreator creator = new AWSSQSCreator();
            creator.CreateQueue();
            creator.ProcessQueue();
            string connectionString = Configuration.GetValue<string>("ConnectionStrings:DevConnection");
            List<OrderTransaction> listOrderTransaction = new List<OrderTransaction>();

            DiscountCalculator discountcalculator = new DiscountCalculator(
                Convert.ToDecimal(orderTransactionObj.orderTransactionDetails.discountCalculator.BaseAmount),
                Convert.ToString(orderTransactionObj.orderTransactionDetails.discountCalculator.CouponCode),
                Convert.ToDecimal(orderTransactionObj.orderTransactionDetails.discountCalculator.AmountAfterDiscount),
                Convert.ToInt32(orderTransactionObj.orderTransactionDetails.discountCalculator.IsCouponActive));

            OrderTransaction ordertransaction = new OrderTransaction(
                Convert.ToInt32(orderTransactionObj.orderTransactionDetails.UserId),
                Convert.ToInt32(orderTransactionObj.orderTransactionDetails.CategoryId),
                Convert.ToDecimal(orderTransactionObj.orderTransactionDetails.Discount),
                discountcalculator
                );
            listOrderTransaction.Add(ordertransaction);

            FinalOrderTransactionCalculation finalOrderTransaction = new FinalOrderTransactionCalculation();
            DataTable dt = finalOrderTransaction.InsertFinalOrderDetails(listOrderTransaction, connectionString);
            List<DataTable> listDataTable = new List<DataTable>();
            listDataTable.Add(dt);
            //return Json(listDataTable);
            object json = "";
            JsonResult jsonResult = new JsonResult(json);
            return jsonResult;
        }

        // PUT api/<OrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
