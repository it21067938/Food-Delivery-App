import React, { useContext, useState } from "react";
import "./FoodItems.css";
import { rating_starts, add_icon_white, remove_icon_red, add_icon_green } from './../../assets/assets';
import { StoreContext } from "../../context/StoreContext";

const FoodItems = ({ id, name, price, description, image }) => {

  const {cardItem, addToCard, removeFromCard} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {
          !cardItem[id]
            ?<img className="add" onClick={() => addToCard(id)} src={add_icon_white}/>
            :<div className="food-item-counter">
                <img onClick={() => removeFromCard(id)} src={remove_icon_red} alt="" />
                <p>{cardItem[id]}</p>
                <img onClick={() => addToCard(id)} src={add_icon_green} alt="onClick={() => setItemCount} " />
             </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs. {price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
