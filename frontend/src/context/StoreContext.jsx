import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cardItem, setCardItem] = useState("");

  const url = "http://localhost:8050";

  const [token, setToken] = useState("");

  const addToCard = (itemId) => {
    if (!cardItem[itemId]) {
      setCardItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCard = (itemId) => {
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItem) {
      if (cardItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItem[item];
      }
    }
    return totalAmount;
  };

  const [food_list, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cardItem,
    setCardItem,
    addToCard,
    removeFromCard,
    getTotalCartAmount,
    url,
    setToken,
    token,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
