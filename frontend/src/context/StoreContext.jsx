import { createContext, useState } from "react"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {

    const [cardItem, setCardItem] = useState({});

    const addToCard = (itemId) => {
        if(!cardItem[itemId]) {
            setCardItem((prev) => ({...prev, [itemId]:1}))
        }else{
            setCardItem((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
        }
    }

    const removeFromCard = (itemId) => {
        setCardItem((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cardItem){
            if(cardItem[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cardItem[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cardItem,
        setCardItem,
        addToCard,
        removeFromCard,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}