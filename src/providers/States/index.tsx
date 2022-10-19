import { createContext, ReactNode, useContext, SetStateAction, Dispatch, useState} from "react"

interface StatesChildren{
    children: ReactNode;
}
interface StatesProps{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const userAddStates = createContext<StatesProps>({} as StatesProps)
function StatesProvider({children}: StatesChildren){

    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <userAddStates.Provider value={{isOpen, setIsOpen}}>
            {children}
        </userAddStates.Provider> 
    )

}

export default StatesProvider
