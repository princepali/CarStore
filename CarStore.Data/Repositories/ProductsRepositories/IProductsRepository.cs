using CarStore.Entities.Entity.Common;
using CarStore.Entities.Entity.ProductEntity;

namespace CarStore.Data.Repositories.ProductsRepositories
{
    public interface IProductsRepository
    {
        List<Products> Getproducts();
        //List<Products> GetProductcategory(Products productData);
        //List<Products> GetFilters(string filterData);
        //Products GetProductById(Guid id);
        //BoolResponse UploadProducts(Products upldProducts);
        //List<Products> DeleteProducts(Guid ProductDelete);
    }
}
