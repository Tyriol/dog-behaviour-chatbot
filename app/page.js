import "dotenv/config";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Chatbot from "../components/chatbot/Chatbot";

// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Chatbot />
    </>
  );
}
