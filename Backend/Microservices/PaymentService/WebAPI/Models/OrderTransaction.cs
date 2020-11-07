using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class OrderTransaction
    {
        public int UserId { get; set; }
        public string OrderId { get; set; }
        public int CategoryId { get; set; }
        public int TransactionId { get; set; }
        public decimal Discount { get; set; }
        public decimal PayableAmount { get; set; }
        public DiscountCalculator discountCalculator { get; set; }
        public Status status { get; set; }

        public OrderTransaction()
        {

        }

        public OrderTransaction(int userId, int categoryId, decimal discount, DiscountCalculator discountCalculator)
        {
            UserId = userId;
            CategoryId = categoryId;
            Discount = discount;
            this.discountCalculator = discountCalculator;
        }
    }
}
