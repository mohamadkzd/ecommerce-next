import AboutComponents from "@/components/(home)/about/about";
import CardSection from "@/components/(home)/card-section/cardSection";
import ContactComponents from "@/components/(home)/contact/contact";
import ProductsTab from "@/components/(home)/products/ProductsTab";
import { getFetch } from "@/lib/config/fetcher";

export default async function Home() {
 const productsTab= await getFetch("/products/products-tabs")
//  console.log("productsTab",productsTab);
 
// tamame safahat manteghi hast va safheye product dar vaghe joziat detail product hast ke single haye har safhe ro neshon mide 
  return (
    <>
      <CardSection />
      <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel}/>
      <AboutComponents/>
      <ContactComponents/>
    </>
  );
}
