import CategoriesListComponents from "@/components/(menu)/categoriesList/categoriesList";
import LoadingProducts from "@/components/(menu)/loading/loading";
import ProductsListComponents from "@/components/(menu)/productsList/productsList";
import SearchComponents from "@/components/(menu)/search/search";
import Sort from "@/components/(menu)/sort/sort";
import { getFetch } from "@/lib/config/fetcher";
import { Suspense } from "react";

const Menu = async ({ searchParams }) => {
  const categories = await getFetch("/categories");
  //   console.log("searchParams",searchParams);
  const params = new URLSearchParams(searchParams);
  // console.log(params.toString());

// dar marhaleye aval ma componente product list ra sakhtim sepas omadim ba estefade az component product ke dar (home) sakhtim ro gharar dadim va bayad behesh yek props ba esme product pass bdim pas mogheye map krdn be jaye elem behesh product ro dadim ke product ham dakhele productListComponent gharar migire ,
// dakhele productList component product ro darim va ham paginate baraye safheye 2om mahsolat

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
            {/* filtere bishtrin kamtrin */}
            <Sort/>
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
