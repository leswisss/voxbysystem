import React from "react";
import MainLayout from "../../layout/MainLayout";
import ProductDisplay from "./ProductDisplay";
import "./productpage.css";

const ProductPage = () => {
  return (
    <MainLayout>
      <section className="voxHero">
        <div className="container vox__container">
          <div className="phero__text">
            <div className="phero__text-1">
              <span className="pvox__text">VOX</span>
            </div>
            <div className="phero__text-2">
              <span className="pvox__text">PRODUITS</span>
            </div>
          </div>
        </div>
      </section>
      <ProductDisplay/>
    </MainLayout>
  );
};

export default ProductPage;
