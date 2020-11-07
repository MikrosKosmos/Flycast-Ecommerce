using Amazon.SQS;
using Amazon.SQS.Model;
using AWSSQS.Constants;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Text.Json.Serialization;

namespace AWSSQS.Helper
{
    public class AWSSQSCreator
    {
        //private string accessKey = AWSConstants.AccessKey;
        //private string secreatKey = AWSConstants.SecreatKey;
        //private string regionalEndPoint = AWSConstants.RegionalEndpoint;
        //private string client = AWSConstants.Client;
        private static AmazonSQSClient amazonSQSClient
        {   
            get
            {
                AWSConstants.GetAWSConstants();
                if (AWSConstants.Client == null)
                {
                    AWSConstants.Client = new AmazonSQSClient(AWSConstants.AccessKey, AWSConstants.SecreatKey, AWSConstants.RegionalEndpoint);
                }
                return AWSConstants.Client;
            }
        }
        string sqsUrl = AWSConstants.Url;

        public void CreateQueue()
        {
            var createQueueRequest = new CreateQueueRequest();
            createQueueRequest.QueueName = "order_to_payment.fifo";

            var createQueueResponse = amazonSQSClient.CreateQueueAsync(createQueueRequest);

            var request = new GetQueueUrlRequest
            {
                QueueName = "order_to_payment.fifo",
                QueueOwnerAWSAccountId = "076796648158"
            };
            var response = amazonSQSClient.GetQueueUrlAsync(request);

            Console.WriteLine(createQueueRequest.QueueName + " queue created successfully..");
        }

        public void ProcessQueue()
        {
            try
            {
                // sending the message to the message queue  
                var sendMessageRequest = new SendMessageRequest
                {
                    QueueUrl = sqsUrl,
                    MessageBody = "This is a simple message queue test"
                };
                SendMessageResponse sendMessageResponse = amazonSQSClient.SendMessageAsync(sendMessageRequest).Result;

                //receiving the message from message queue  
                var receiveMessageRequest = new ReceiveMessageRequest
                {
                    QueueUrl = sqsUrl

                };
                var receiveMessageResponse = amazonSQSClient.ReceiveMessageAsync(receiveMessageRequest);
                var messages = receiveMessageResponse.Result;
            }
            
            catch(AmazonSQSException ex)
            {

            }
        }
    }
}
