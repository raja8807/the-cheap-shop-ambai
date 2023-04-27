import Header from "./header/header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {children}
        </div>
    </>
  );
};

export default Layout;
