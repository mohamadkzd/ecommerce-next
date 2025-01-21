import Product from "@/components/(home)/products/product";
import { getFetch } from "@/lib/config/fetcher";
import { numberFormat, salePercent } from "@/lib/helper/helper";
import Image from "next/image";

const ProductDetail = async ({ params }) => {
  // console.log(params.slug);
  // ma agar be shekle bala log bgirim be sorat NCode url ro neshon mide chon kalamat farsi dare va az decodeUrl estefade miknim be shekl log payin
  console.log(decodeURI(params.slug));

  const productDetail = await getFetch(`/products/${decodeURI(params.slug)}`);
  //   console.log(productDetail);
  //   joziat mahsolat end point {{baseUrl}}/products/:slug
  const randomProduct = await getFetch("/random-products?count=4");
  // baghie mahsolat end point {{baseUrl}}/random-products?count=4
//   end pointesh toye backEnd tarif shode va age dasti count ro taghir bdim masaln 5 , 5 ta data random ba migardone 
  console.log(randomProduct);

  return (
    <>
      <section className="single_page_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-sm-12 col-lg-6">
                  <h3 className="fw-bold mb-4">{productDetail.name}</h3>
                  <h5 className="mb-3">
                    {productDetail?.sale_price ? (
                      <div className="d-flex justify-content-start align-items-center gap-5">
                        <del>تومان {numberFormat(productDetail.price)}</del>
                        <span>
                          تومان {numberFormat(productDetail.sale_price)}
                        </span>
                      </div>
                    ) : (
                      <span>{numberFormat(productDetail.price)}</span>
                    )}

                    {/* gheymat asli - gheymat takhfif / gheymat asli * 100  */}

                    {productDetail?.sale_price && (
                      <div className="text-danger fs-6">
                        {salePercent(
                          productDetail.price,
                          productDetail.sale_price
                        )}
                        % تخفیف
                      </div>
                    )}
                  </h5>
                  <p>{productDetail.description}</p>

                  <div className="mt-5 d-flex">
                    <button className="btn-add">افزودن به سبد خرید</button>
                    <div className="input-counter ms-4">
                      <span className="plus-btn">+</span>
                      <div className="input-number">1</div>
                      <span className="minus-btn">-</span>
                    </div>
                  </div>
                </div>

                {/* start slider */}
                <div className="col-sm-12 col-lg-6">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    {/* paginate */}
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      {productDetail?.images.map((img, index) => {
                        return (
                          <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index + 1}
                            className="active"
                          ></button>
                        );
                      })}
                    </div>

                    {/* aksa */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Image
                          src={productDetail.primary_image}
                          className="d-block w-100"
                          alt="product-primary-image"
                          width={464}
                          height={309}
                        />
                      </div>
                      {productDetail?.images.map((img) => {
                        return (
                          <div key={img.id} className="carousel-item">
                            <Image
                              src={img.image}
                              className="d-block w-100"
                              alt="..."
                              width={464}
                              height={309}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* next and prev */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      {/* baghie mahsolat */}
      <section className="food_section my-5">
        <div className="container">
          <div className="row gx-3">
            {randomProduct.map((product,index) => {
              return (
                <div key={index} className="col-sm-6 col-lg-3">
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
