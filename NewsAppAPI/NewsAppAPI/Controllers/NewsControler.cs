using Microsoft.AspNetCore.Mvc;
using NewsAppAPI.Models.DTO;
using NewsAppAPI.Services.Contract;
using System.Net;

namespace NewsAppAPI.Controllers
{
    [ApiController]
    [Route("api/News")]
    public class NewsControler : ControllerBase
    {
        private APIRequest newsReques;
        private APIRespond newsRespond;
        private readonly INewsAPIConnection services;

        public NewsControler(INewsAPIConnection _services)
        {
            services = _services;
            newsReques = new APIRequest();
            newsRespond = new APIRespond();
        }

        [HttpGet("category", Name = "GetNews")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<APIRespond>> GetNews(string category)
        {

            switch (category.ToLower())
            {
                case "home":
                    newsReques = await services.RequestForHomeAsync();
                    break;

                default:
                    newsReques = await services.RequestByCategoryAsync(category);
                    break;
            }


            try
            {
                List<News> news = new List<News>();
                

                if (newsReques.StatusCode == HttpStatusCode.OK)
                {
                    newsRespond.StatusCode = HttpStatusCode.OK;
                    newsRespond.Result = news;

                    var index = 1;

                    foreach (var article in (IEnumerable<NewsDTO>)newsReques.Result)
                    {
                        news.Add(new News
                        {
                            Id = index,
                            Category = article.Category,
                            Author = article.Author,
                            Title = article.Title,
                            Description = article.Description,
                            Url = article.Url,
                            UrlToImage = article.UrlToImage,
                            Content = article.Content,
                            PublishedAt = article.PublishedAt,
                        });
                        index++;
                    }
                }
                else
                {
                    newsRespond.StatusCode = HttpStatusCode.BadRequest;
                    newsRespond.ErrorMessages = newsReques.ErrorMessages;
                    newsRespond.IsSuccess = false;
                }

                return newsRespond;
            }
            catch (Exception ex)
            {
                APIRespond dto = new APIRespond
                {
                    ErrorMessages = new List<string> { ex.Message },
                    IsSuccess = false,
                    StatusCode = HttpStatusCode.BadRequest
                };
                return dto;
            }
        }
    }
}