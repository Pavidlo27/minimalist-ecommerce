import { useEffect, useState } from "react";
import logoImg from "../assets/images/logo.png";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded(false);
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => clearTimeout(timer);
  });
  return (
    showLoader && (
      <div className={`preloader-wrap ${isLoded === true ? "loaded" : ""}`}>
        <img src={logoImg} alt="logo" className="logo" />
      </div>
    )
  );
}