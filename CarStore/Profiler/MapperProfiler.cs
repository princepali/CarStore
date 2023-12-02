using AutoMapper;
using CarStore.Entities.Entity.ProductEntity;
using CarStore.Models.Products;

namespace CarStore.Profiler
{
    public class MapperProfiler : Profile
    {
        public MapperProfiler()
        {
            CreateMap<ProductsModel, Products>();
        }
    }
}
