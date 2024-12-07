import { FC } from "react";
// import styled from 'styled-components';
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

// const Conteiner = styled.div``

const App: FC = () => {
  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
};

export default App;
