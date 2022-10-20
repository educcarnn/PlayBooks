import { createContext, ReactNode, SetStateAction, Dispatch, useState} from "react"

interface StatesChildren{
    children: ReactNode;
}
interface StatesProps{
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}

export const userAddStates = createContext<StatesProps>({} as StatesProps)
function StatesProvider({children}: StatesChildren){

    const [value, setValue] = useState("")
    
    return(
        <userAddStates.Provider value={{value, setValue}}>
            {children}
        </userAddStates.Provider> 
    )

}

export default StatesProvider
