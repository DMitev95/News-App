using System.Net;

namespace NewsAppAPI.Models.DTO
{
    public class APIRequest
    {
        public HttpStatusCode StatusCode { get; set; }
        public List<string> ErrorMessages { get; set; }

        public List<NewsDTO> Result { get; set; } = new List<NewsDTO>();
    }
}
