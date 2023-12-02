using CarStore.Data.Repositories.Dapper;
using CarStore.Entities.Entity.Common;
using CarStore.Entities.Entity.ProductEntity;
using Dapper;

namespace CarStore.Data.Repositories.ProductsRepositories
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly IDapperRepository _dapperRepository;
        public ProductsRepository(IDapperRepository dapperRepository)
        {
            _dapperRepository = dapperRepository;
        }
        //Get all Products
        public List<Products> Getproducts()
        {
            DynamicParameters dbParams = new DynamicParameters();
            var products = _dapperRepository.GetAll<Products>(ProcedureConstants.ProcedureGetProducts,dbParams,CarStoreConstants.DB_CarStore);
            return products;
        }
    }
}
