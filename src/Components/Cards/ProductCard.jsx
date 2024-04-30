import React from "react";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const ProductCard = ({ item }) => {
  return (
    <div className={styles.Procard}>
      <div className={styles.productCard}>
        <div className={styles.productCardImage}></div>
        <img src={item.thumbnail} alt="" />
        <div className={styles.productCardText}>
          <h5>{item.title}</h5>
          <div>
            <FontAwesomeIcon icon={faStar} className={styles.star}/>
            <span>5.0</span>
            <FontAwesomeIcon icon={faHeart} className={styles.star}/>
            <span>29</span>
          </div>

          <p>{item.description}</p>
          <button className={styles.prdctBtnOne}>CART</button>
          <button className={styles.prdctBtnTwo}>VIEW</button>
        </div>
      </div>

      
    </div>
  );
};

export default ProductCard;
