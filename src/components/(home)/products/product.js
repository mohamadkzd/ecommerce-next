import { numberFormat } from "@/lib/helper/helper";
import Image from "next/image";

const Product = ({ product }) => {
  // console.log("tabPanelTest",tabPanel);
  // console.log("producttest",product);

  return (
    <div className="box">
      <div>
        <div className="img-box">
          <Image
            src={product.primary_image}
            width={100}
            height={65}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
        <div className="detail-box">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <div className="options">
            <h6>
              {product?.sale_price? (
                <>
                  <span>{numberFormat(product.sale_price)}</span>
                  <del>{numberFormat(product.price)}</del>
                </>
              ) : (
                <span>{numberFormat(product.price)}</span>
              )}

              <span>تومان</span>
            </h6>
            <a href="">
              <i className="bi bi-cart-fill text-white fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
