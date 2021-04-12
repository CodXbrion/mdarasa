import React, {useContext} from 'react'
import './Reducer'

const AppContext = React.createContext()//initialize context


const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export  {AppProvider, AppContext}
