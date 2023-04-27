import { Carousel, Image } from "react-bootstrap";
import styles from './carousal.module.scss'
const HomeCarousel = () => {
  return <Carousel variant="dark">
  <Carousel.Item>
    <div className={styles.banner_image}>
        <Image src="/images/banner1.jpg" alt='xx' fill/>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className={styles.banner_image}>
        <Image src="/images/banner2.jpg" alt='xx' fill/>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className={styles.banner_image}>
        <Image src="/images/banner3.jpg" alt='xx' fill/>
    </div>
  </Carousel.Item>
</Carousel>;
};

export default HomeCarousel
