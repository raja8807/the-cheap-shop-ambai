import Product from "../product/product";
import styles from "./products.module.scss";
const ProductsHolder = () => {
  return <div className={styles.products}>

    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
  </div>;
};

export default ProductsHolder
