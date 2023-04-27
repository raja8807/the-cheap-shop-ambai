import Image from "next/image";
import styles from "./product.module.scss";
import { Button } from "react-bootstrap";

const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image src="/images/shirt-temp.jfif" fill alt="product" />
      </div>

      <div className={styles.details}>
        <strong>Men Shirt</strong>
        <div className={styles.sizes}>
          <p>Sizes : </p>
          <div>S</div>
          <div>M</div>
          <div>L</div>
        </div>
        <h3>Rs.499/-</h3>
        <div>
          <Button variant="outline-primary">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
