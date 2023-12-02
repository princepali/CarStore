using CarStore.Data.Repositories.ProductsRepositories;
using CarStore.Entities.Entity.ProductEntity;

namespace CarStore.Services.ProductServices
{
    public class ProductService : IProductService
    {

        private readonly IProductsRepository _ProductRepository;



        public ProductService(IProductsRepository ProductRepository)
        {
            _ProductRepository = ProductRepository;
        }

        public List<Products> Getproducts(Products productData)
        {
            List<Products> Product = _ProductRepository.Getproducts();
            return Product;
        }

        //public List<Products> GetFilters(string filterData)
        //{
        //    List<Products> sortFilter = _ProductRepository.GetFilters(filterData);
        //    return sortFilter;
        //}


        //public List<Products> GetProductcategory(Products productData)
        //{
        //    List<Products> category = _ProductRepository.GetProductcategory(productData);
        //    return category;
        //}

        //public Products GetProductById(Guid PropductId)
        //{
        //    var PdpData = _ProductRepository.GetProductById(PropductId);
        //    return PdpData;
        //}


        //public List<Products> GetProductCart(List<Guid> pids)
        //{
        //    List<Products> product = _ProductRepository.Getproducts();
        //    return product.Where(x => pids.Contains(x.ProductId)).ToList();
        //}

        //public BoolResponse UploadProducts(Products uploadproducts)
        //{
        //    return _ProductRepository.UploadProducts(uploadproducts);
        //}

        //public List<Products> DeleteProducts(Guid ProductDelete)
        //{
        //    List<Products> DeleteProducts = _ProductRepository.DeleteProducts(ProductDelete);
        //    return DeleteProducts;
        //}

    }
}
