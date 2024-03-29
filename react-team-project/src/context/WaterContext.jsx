import { createContext, useContext, useState } from "react"

const WaterContext = createContext()

export const  WaterProvider = ({children}) => {
    const [quantity, setQuantity] = useState(20);

    const addWater = () => {
      setQuantity((c) => c + 20);
    };
    return(
        <WaterContext.Provider value={[quantity, addWater]}>
            {children}
        </WaterContext.Provider>
    )
}
export const useWater =()=>useContext(WaterContext)