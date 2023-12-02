namespace CarStore.Models.Products
{
    public class ProductsModel
    {
        public Guid ProductId { get; set; }

        public string ProductName { get; set; }

        public string Image { get; set; }

        public decimal Price { get; set; }

        public int Rating { get; set; }

        public string HoverImage { get; set; }

        public string IndicatorImage { get; set; }

        public string Short_Description { get; set; }

        public string Description { get; set; }
    }
}
