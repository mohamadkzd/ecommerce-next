"use client";
import Link from "next/link";
import Product from "./product";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductsTab = ({ tabList, tabPanel }) => {
  //   console.log(tabList, tabPanel);

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <Tabs selectedTabClassName={"active"}>
          {/* kole data e ma az jomle ui va list mahsolat dakhele tabs hast */}

          {/* bayad dakhele tablist ul e ma bashe  */}
          <TabList>
            <ul className="filters_menu">
              {tabList?.map((item, index) => {
                return <Tab key={index}>{item}</Tab>;
              })}
            </ul>
          </TabList>

          <div className="filters-content">
            {tabPanel?.map((elem, index) => {
              console.log("elem1",elem);
              
              return (
                // data hayi ke gharare tekrar beshe dakhele tabPanel gharar migire
                <TabPanel key={index}>
                  <div className="row grid">
                    {elem.map((product) => {
                      console.log("elem2",product);
                      
                      return (
                        <div key={product.id} className="col-sm-6 col-lg-4">
                          {/* dar zire inja dive classe box bod ke chob hame ja gharare azash estefade knim miaym va componentesh miknim va baresh midarim va esme component ro producte khali mizarim  va miaym tabPanele ke datae kolie ma hast ro bar migardonim  
                          dar marhaleye baad gharare tabPanel tekrar beshe baraye hamin miaym zire filters-content map miznim roye tabPanel */}

                          <Product product={product} />
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              );
            })}
          </div>
        </Tabs>

        <div className="btn-box">
          <Link href="/menu">مشاهده بیشتر</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsTab;
