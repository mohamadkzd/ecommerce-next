import CategoriesListComponents from "@/components/(menu)/categoriesList/categoriesList";
import LoadingProducts from "@/components/(menu)/loading/loading";
import ProductsListComponents from "@/components/(menu)/productsList/productsList";
import SearchComponents from "@/components/(menu)/search/search";
import { getFetch } from "@/lib/config/fetcher";
import { Suspense } from "react";

const Menu = async ({ searchParams }) => {
  const categories = await getFetch("/categories");
  //   console.log("searchParams",searchParams);
  const params = new URLSearchParams(searchParams);
//   console.log(params.toString());

  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <SearchComponents />
            <hr />
            {/* category list omadim component kardim */}
            <CategoriesListComponents categories={categories} />
            <hr />
            <div>
              <label className="form-label">مرتب سازی</label>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  بیشترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  کمترین قیمت
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  پرفروش ترین
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label cursor-pointer">
                  با تخفیف
                </label>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-9">
            {/* ma dar product list ham paginate ro darim ham hameye mahsolat va data ro dar onja fetch miknim  */}
            <Suspense key={params.toString()} fallback={<LoadingProducts />}>
              <ProductsListComponents params={params.toString()} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
