import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import Modal from "components/Modal";
import Auth from "components/Auth";
import { useSelector } from "react-redux";
import Mark from "components/Mark";

interface HomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  const displayForm = useSelector((state: any) => state.auth.displayForm);
  return (
    <div style={displayForm ? { height: "100vh", overflow: "hidden" } : null}>
      {displayForm && (
        <Modal>
          <Auth />
        </Modal>
      )}
      <Header />
      <div style={{ height: "90vh" }}>Main</div>
      <Mark />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
