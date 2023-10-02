using NewsAppAPI.Models.DTO;

namespace NewsAppAPI.Services.Contract
{
    public interface INewsAPIConnection
    {
        public Task<APIRequest> RequestByCategoryAsync(string category);
        public Task<APIRequest> RequestForHomeAsync();
    }
}
