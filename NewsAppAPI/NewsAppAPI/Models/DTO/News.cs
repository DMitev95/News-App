﻿namespace NewsAppAPI.Models.DTO
{
    public class News
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string UrlToImage { get; set; }
        public string Content { get; set; }
        public string PublishedAt { get; set; }
    }
}
