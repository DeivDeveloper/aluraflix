import styles from "./Home.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Home;
