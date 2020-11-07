using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace WebAPI.Helper
{
    public class DiscountCalculation
    {
        private decimal discountedAmount = decimal.Zero;
        private int isActiveCoupon;
        //DBConfig dBConfig = new DBConfig();
        public decimal FetchDiscountValue(List<DiscountCalculator> listDiscountCalculators, String connString)
        {
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connString))
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(Helper.Constants.SP_CALCULATE_DISCOUNT, conn))
                    {
                        foreach (DiscountCalculator discountCalculator in listDiscountCalculators)
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("parCouponCode", discountCalculator.CouponCode);
                            cmd.Parameters.AddWithValue("parBaseAmount", discountCalculator.BaseAmount);
                            cmd.Parameters.Add("parAmountWithCoupon", MySqlDbType.Decimal);
                            cmd.Parameters.Add("parIsActive", MySqlDbType.Int32);
                            cmd.Parameters["parAmountWithCoupon"].Direction = ParameterDirection.Output;
                            cmd.Parameters["parIsActive"].Direction = ParameterDirection.Output;
                            cmd.ExecuteNonQuery();
                            discountCalculator.AmountAfterDiscount = (decimal)cmd.Parameters["parAmountWithCoupon"].Value;
                            discountCalculator.IsCouponActive = Convert.ToInt32(cmd.Parameters["parIsActive"].Value);
                            discountedAmount = discountCalculator.AmountAfterDiscount;
                            isActiveCoupon = discountCalculator.IsCouponActive;
                        }
                    }
                    conn.Close();
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return discountedAmount;
        }
    }
}
