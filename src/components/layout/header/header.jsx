import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <div className={styles.logo}>
            <Image src='/images/logo (1).png' alt="logo" fill/>
          </div>
          <nav>
            <ul>
              <li><Link href=''> Home</Link></li>
              <li ><Link href=''>Shirts</Link></li>
              <li><Link href=''>Pants</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
