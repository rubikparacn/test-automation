using System.Net;
using System.Net.Mail;


namespace util.email;


public partial class Instance
{

    public class Config
    {
        public string uname { get; set; } = "RUBIK\\geribildirim";

        public string pass { get; set; } = "X3dys[J.5*.?";
        public string host { get; set; } = "10.34.30.155";
        public string sender { get; set; } = "geribildirim@rubikpara.com";
    }
    public class Request
    {
        public string Subject { get; set; } = "";
        public string Body { get; set; } = "";
        public List<string> To { get; set; } = new List<string>();

    }

    public static void Send(Request req, Config config = null)
    {
        try
        {
            config = config ?? new Config();
            Console.WriteLine("Sending: " + config.sender);
            using (var message = new MailMessage())
            {
                message.Subject = req.Subject;
                message.Body = req.Body;
                message.Sender = new MailAddress(config.sender);
                message.From = new MailAddress(config.sender);

                req.To.ForEach(message.To.Add);

                using (SmtpClient client = new SmtpClient
                {
                    // EnableSsl = true,
                    Host = config.host,
                    Port = 25,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = true,
                    Credentials = new NetworkCredential(config.uname, config.pass),

                })
                {

                    client.Send(message);
                }
            }
        }

        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            Console.WriteLine(ex);

        }
    }
}