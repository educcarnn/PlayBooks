import { createContext, ReactNode, useContext, SetStateAction, Dispatch, useState} from "react"

interface StatesChildren{
    children: ReactNode;
}
interface StatesProps{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const userContext = createContext<StatesProps>({} as StatesProps)
function States({children}: StatesChildren){

    const [isOpen, setIsOpen] = useState(false)
    return(
        <userContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </userContext.Provider> 
    )

}

export default States
