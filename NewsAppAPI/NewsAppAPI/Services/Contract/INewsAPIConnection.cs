using NewsAppAPI.Models.DTO;

namespace NewsAppAPI.Services.Contract
{
    public interface INewsAPIConnection
    {
        public Task<APIRequest> RequestByCategoryAsync(string category, int pageSize = 40);
        public Task<APIRequest> RequestForHomeAsync(int pageSize = 10);
    }
}
