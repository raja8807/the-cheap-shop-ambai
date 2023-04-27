import HomeCarousel from "@/components/carousel/carousal";
import styles from "./home.module.scss";
import ProductsHolder from "@/components/products/products/products";
const HomePage = () => {
  return (
    <>
      <div className={styles.home}>
        <HomeCarousel />
        <h2>OUR PRODUCTS</h2>
        <hr/>
        <ProductsHolder/>
      </div>
    </>
  );
};

export default HomePage;
