using AutoMapper;
using CarStore.Entities.Entity.ProductEntity;
using CarStore.Models.Products;
using CarStore.Services.ProductServices;
using Microsoft.AspNetCore.Mvc;

namespace CarStore.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        public ProductController(IProductService productService,IMapper mapper)
        {
            _productService = productService;
            _mapper = mapper;
        }

        /*  public ActionResult Index()
          {
              return View();  
          }*/

        // GET: Product
        public ActionResult ProductList()
        {
            return View();
        }

        //public ActionResult ProductDetail(Guid Id)
        //{
        //    var PdpData = _productService.GetProductById(Id);
        //    var productDetail = Mapper.Map<Products, ProductsModel>(PdpData);
        //    return View(productDetail);
        //}

        public ActionResult Basket()
        {
            return View();
        }

        public ActionResult UploadProductList()
        {
            return View();
        }

        public ActionResult WishList()
        {
            return View();
        }
        public ActionResult GetProducts(ProductsModel productsModel)
        {
            var mappedProducts = _mapper.Map<ProductsModel,Products>(productsModel);
            var products = _productService.Getproducts(mappedProducts);
            return Json(products);
        }
        //[HttpGet]
        //public JsonResult Getcategory(Products productData)
        //{
        //    var productInfo = _productService.GetProductcategory(productData);



        //    var productCategory = Mapper.Map<List<Products>, List<CategoryModel>>(productInfo);


        //    return Json(productCategory);
        //}
        //[HttpPost]
        //public JsonResult GetFilters(string SortCriteria)
        //{

        //    var productInfo = _productService.GetFilters(SortCriteria);
        //    var productFilter = Mapper.Map<List<Products>, List<ProductsModel>>(productInfo);
        //    return Json(productFilter);
        //}




        //public JsonResult UploadProducts(Products ProductDetails)
        //{
        //    var boolResponse = _productService.UploadProducts(ProductDetails);
        //    //var response=Mapper.Map<Product>(Product);
        //    return Json(boolResponse);
        //}

        //public JsonResult DeleteProducts(Guid ProductDelete)
        //{
        //    var deleteproductid = _productService.DeleteProducts(ProductDelete);
        //    return Json(deleteproductid);
        //}


        //[HttpPost]
        //public JsonResult AddToCart(string Name)
        //{
        //    var addtocartcookie = Request.Cookies[Name];
        //    if (addtocartcookie != null)
        //    {
        //        //var productIds = addtocartcookie.Value.Split('-').Select(x => Guid.Parse(x)).ToList();
        //        var product = _productService.GetProductCart(productIds);
        //        return Json(product);
        //    }
        //    else
        //    {
        //        return Json(null);
        //    }
        //}
    }
}
