import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Modal from "components/Modal";
import Auth from "components/Auth";
import { useSelector } from "react-redux";
import Mark from "components/Mark";
import Navbar from "components/Navbar";
import { useJwt } from "react-jwt";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const [render, setRender] = useState(0);
  const displayForm = useSelector((state: any) => state.auth.displayForm);
  const { access } = JSON.parse(localStorage.getItem("persist:root"));
  const { decodedToken } = useJwt(access);

  useEffect(() => {
    setRender(render + 1);
  }, [access]);

  return (
    <div style={displayForm ? { height: "100vh", overflow: "hidden" } : null}>
      {displayForm && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Navbar scroll={false} token={decodedToken} />
      <Header />
      <div style={{ height: "90vh" }}>Main</div>
      <Mark />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
