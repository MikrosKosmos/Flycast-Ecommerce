using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class BankDetails
    {
        public int BankDetailsId { get; set; }
        public int UserId { get; set; }
        public long AccountNumber { get; set; }
        public string BankName { get; set; }
        public string BranchName { get; set; }
        public string IFSCCode { get; set; }
        public string AccountHolderName { get; set; }
    }
}
