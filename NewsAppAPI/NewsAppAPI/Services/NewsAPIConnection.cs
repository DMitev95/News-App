using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;
using NewsAppAPI.Models.DTO;
using NewsAppAPI.Services.Contract;
using System.ComponentModel;
using System.Net;

namespace NewsAppAPI.Services
{
    public class NewsAPIConnection : INewsAPIConnection
    {
        public APIRequest responseModel { get; set; }
        private readonly string newsUrlKey;

        public NewsAPIConnection(IConfiguration config)
        {
            responseModel = new APIRequest();
            newsUrlKey = config.GetValue<string>("NewsSettings:NewsKey");
        }

        public async Task<APIRequest> RequestByCategoryAsync(string category, int pageSize = 40)
        {
            try
            {
                if (!Enum.TryParse<Categories>(category, true, out Categories cat))
                {
                    throw new InvalidEnumArgumentException("The category is not correct!");
                }

                var newsApiClient = new NewsApiClient(newsUrlKey);
                var articlesResponse = await newsApiClient.GetTopHeadlinesAsync(new TopHeadlinesRequest
                {
                    Language = Languages.EN,
                    Category = (Categories)Enum.Parse(typeof(Categories), category, true),
                    PageSize = pageSize
                });

                if (articlesResponse.Status == Statuses.Ok)
                {

                    responseModel.StatusCode = HttpStatusCode.OK;
                    foreach (var news in articlesResponse.Articles)
                    {
                        if (news.Title != "[Removed]")
                        {
                            responseModel.Result.Add(new NewsDTO
                            {
                                Category = category,
                                Author = news.Author,
                                Title = news.Title,
                                Description = news.Description,
                                Url = news.Url,
                                UrlToImage = news.UrlToImage,
                                Content = news.Content,
                                PublishedAt = news.PublishedAt.ToString()
                            });
                        }
                    }
                    return responseModel;
                }

                APIRequest dto = new APIRequest
                {
                    ErrorMessages = new List<string> { articlesResponse.Error.ToString() }
                };
                return dto;
            }
            catch (Exception ex)
            {
                APIRequest dto = new APIRequest
                {
                    ErrorMessages = new List<string> { ex.Message }
                };
                return dto;
            }
        }

        public async Task<APIRequest> RequestForHomeAsync(int pageSize = 10)
        {
            string[] categoriesForHomePage = { "business", "sports", "science" };

            foreach (var name in categoriesForHomePage)
            {
                try
                {
                    if (!Enum.TryParse<Categories>(name, true, out Categories cat))
                    {
                        throw new InvalidEnumArgumentException("The category is not correct!");
                    }

                    var newsApiClient = new NewsApiClient(newsUrlKey);
                    var articlesResponse = await newsApiClient.GetTopHeadlinesAsync(new TopHeadlinesRequest
                    {
                        Language = Languages.EN,
                        Category = (Categories)Enum.Parse(typeof(Categories), name, true),
                        PageSize = pageSize
                    });

                    if (articlesResponse.Status == Statuses.Ok)
                    {

                        responseModel.StatusCode = HttpStatusCode.OK;
                        foreach (var news in articlesResponse.Articles)
                        {
                            if (news.Title != "[Removed]")
                            {
                                responseModel.Result.Add(new NewsDTO
                                {
                                    Author = news.Author,
                                    Category = name,
                                    Title = news.Title,
                                    Description = news.Description,
                                    Url = news.Url,
                                    UrlToImage = news.UrlToImage,
                                    Content = news.Content,
                                    PublishedAt = news.PublishedAt.ToString()
                                });
                            }
                        }
                    }
                    else
                    {
                        APIRequest dto = new APIRequest
                        {
                            ErrorMessages = new List<string> { articlesResponse.Error.ToString() }
                        };
                        return dto;
                    }

                }
                catch (Exception ex)
                {
                    APIRequest dto = new APIRequest
                    {
                        ErrorMessages = new List<string> { ex.Message }
                    };
                    return dto;
                }
            }

            return responseModel;
        }

        public async Task<APIRequest> RequestByWordAsync(string word, int pageSize = 40)
        {
            try
            {
                var newsApiClient = new NewsApiClient(newsUrlKey);
                var articlesResponse = newsApiClient.GetEverything(new EverythingRequest
                {
                    Language = Languages.EN,
                    Q = word,
                    SortBy = SortBys.Popularity,
                    PageSize = pageSize
                });

                if (articlesResponse.Status == Statuses.Ok)
                {

                    responseModel.StatusCode = HttpStatusCode.OK;
                    foreach (var news in articlesResponse.Articles)
                    {
                        if (news.Title != "[Removed]")
                        {
                            responseModel.Result.Add(new NewsDTO
                            {
                                Author = news.Author,
                                Title = news.Title,
                                Description = news.Description,
                                Url = news.Url,
                                UrlToImage = news.UrlToImage,
                                Content = news.Content,
                                PublishedAt = news.PublishedAt.ToString()
                            });
                        }
                    }
                    return responseModel;
                }

                APIRequest dto = new APIRequest
                {
                    ErrorMessages = new List<string> { articlesResponse.Error.ToString() }
                };
                return dto;
            }
            catch (Exception ex)
            {
                APIRequest dto = new APIRequest
                {
                    ErrorMessages = new List<string> { ex.Message }
                };
                return dto;
            }
        }
    }
}
