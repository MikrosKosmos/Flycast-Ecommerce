using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Helper
{
    public class FinalOrderTransactionCalculation
    {
        public DataTable InsertFinalOrderDetails(List<OrderTransaction> orderTransactions, string connString)
        {
            DataTable dataTable = new DataTable();
            try
            {
                using (MySqlConnection conn = new MySqlConnection(connString))
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(Constants.SP_ORDER_TRANSACTION, conn))
                    {
                        foreach (OrderTransaction orderTransaction in orderTransactions)
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("parUserId", orderTransaction.UserId);
                            cmd.Parameters.AddWithValue("parCategoryId", orderTransaction.CategoryId);
                            cmd.Parameters.AddWithValue("parBaseAmount", orderTransaction.discountCalculator.BaseAmount);
                            cmd.Parameters.AddWithValue("parCouponCode", orderTransaction.discountCalculator.CouponCode);
                            cmd.Parameters.AddWithValue("parPayableAmount", orderTransaction.discountCalculator.AmountAfterDiscount);
                            //                        MySqlDataReader mySqlDataReader;
                            //                        mySqlDataReader = cmd.ExecuteReader();
                            //                        if (mySqlDataReader != null)
                            //                        {
                            //                            dataTable = mySqlDataReader.GetSchemaTable();
                            //                            List<OrderTransaction> target = dataTable.AsEnumerable()
                            //.Select(row => new OrderTransaction
                            //{
                            //    // assuming column 0's type is Nullable<long>
                            //    UserId = row.Field<int?>(0).GetValueOrDefault(),
                            //    OrderId = String.IsNullOrEmpty(row.Field<string>(1))
                            //        ? "not found"
                            //        : row.Field<string>(1),
                            //}).ToList();
                            //                            //foreach (DataRow row in dataTable.Rows)
                            //                            //{
                            //                            //    foreach (var item in row.ItemArray)
                            //                            //    {
                            //                            //        Console.WriteLine(item);
                            //                            //    }
                            //                            //}
                            //                            Console.WriteLine(target);
                            //                        }
                            MySqlDataAdapter dataAdapter = new MySqlDataAdapter(cmd);
                            DataSet ds = new DataSet();
                            dataAdapter.Fill(dataTable);
                            dataAdapter.Dispose();
                           // Console.WriteLine("******* data table: ", dataTable.Rows.Count, "*****");
                           for(int i=0; i<dataTable.Rows.Count; i++)
                            {
                                string a = Convert.ToString(dataTable.Rows[i]["order_id"]);
                                Console.WriteLine("output", a);
                            }
                        }
                        cmd.Dispose();
                    }
                    conn.Close();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return dataTable;
        }
    }
}
