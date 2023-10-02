using System.Net;

namespace NewsAppAPI.Models.DTO
{
    public class APIRespond
    {
        public HttpStatusCode StatusCode { get; set; }
        public List<string> ErrorMessages { get; set; }
        public bool IsSuccess { get; set; } = true;
        public object Result { get; set; }
    }
}
