import Product from "@/components/(home)/products/product";
import { getFetch } from "@/lib/config/fetcher";
import PaginateComponents from "../paginate/paginate";

const ProductsListComponents = async ({params}) => {
  const data = await getFetch(`/menu?${params}`);
  return (
    <>
      <div className="row gx-3">
        {data?.products.map((product) => {
          return (
            <div className="col-sm-6 col-lg-4">
              {/* in haman producti ast ke az ghabl sakhte bodim va kole div e classe box ro bar dashtim  */}
              <Product product={product} />
            </div>
          );
        })}
      </div>

      <PaginateComponents links={data.meta.links} />
    </>
  );
};

export default ProductsListComponents;
