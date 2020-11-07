using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DiscountCalculator
    {
        public decimal BaseAmount { get; set; }
        public string CouponCode { get; set; }
        public decimal AmountAfterDiscount { get; set; }
        public int IsCouponActive { get; set; }
        public DiscountCalculator(){ }
        public DiscountCalculator(decimal baseAmount, string couponCode, decimal amountAfterDiscount, int isCouponActive)
        {
            this.BaseAmount = baseAmount;
            this.CouponCode = couponCode;
            this.AmountAfterDiscount = amountAfterDiscount;
            this.IsCouponActive = isCouponActive;
        }
    }
}
