import React, { useRef } from "react";
import Navbar from "../components/Navbar";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

function Home() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return <Navbar />;
}

export default Home;
