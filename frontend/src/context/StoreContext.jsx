import { createContext, useEffect, useState } from "react"
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

    useEffect(() => {
        console.log(cardItem);
    }, [cardItem])

    const contextValue = {
        food_list,
        cardItem,
        setCardItem,
        addToCard,
        removeFromCard
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}