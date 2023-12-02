using CarStore.Entities.Entity.Common;
using CarStore.Entities.Entity.ProductEntity;

namespace CarStore.Services.ProductServices
{
    public interface IProductService
    {
        List<Products> Getproducts(Products productData);
        //List<Products> GetProductcategory(Products productData);
        //List<Products> GetFilters(string filterData);
        //Products GetProductById(Guid Id);
        //List<Products> GetProductCart(List<Guid> pids);
        //BoolResponse UploadProducts(Products uploadproducts);
        //List<Products> DeleteProducts(Guid ProductDelete);
    }
}
