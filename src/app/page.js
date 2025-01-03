import About from "@/components/(home)/about/about";
import CardSection from "@/components/(home)/card-section/cardSection";
import Contact from "@/components/(home)/contact/contact";
import ProductsTab from "@/components/(home)/products/ProductsTab";
import { getFetch } from "@/lib/config/fetcher";

export default async function Home() {
 const productsTab= await getFetch("/products/products-tabs")
//  console.log("productsTab",productsTab);
 
  return (
    <>
      <CardSection />
      <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel}/>
      <About/>
      <Contact/>
    </>
  );
}
