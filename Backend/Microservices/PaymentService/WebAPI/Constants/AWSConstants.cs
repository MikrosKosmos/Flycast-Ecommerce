using System;
using DotNetEnv;
using Amazon.SQS;
using Amazon;

namespace AWSSQS.Constants
{
    static class AWSConstants
    {
        public static string AccessKey { get; set; }
        public static string SecreatKey { get; set; }
        public static string Url { get; set; }
        public static RegionEndpoint RegionalEndpoint { get; set; }
        public static AmazonSQSClient Client { get; set; }
        public static void GetAWSConstants()
        {
            DotNetEnv.Env.Load("./.env");
            AccessKey = Env.GetString("ACCESS_KEY");
            SecreatKey = Environment.GetEnvironmentVariable("SECREAT_KEY");
            Url = Environment.GetEnvironmentVariable("Url");
            RegionalEndpoint = RegionEndpoint.GetBySystemName(Environment.GetEnvironmentVariable("REGIONAL_POINT"));
        }
    }
}
