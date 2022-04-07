import React, {createContext} from 'react'
import img  from '../images/face.jpg'
const userData = {
    login: true,
    name: 'Berizsin',
    image: img
}
export const userContext = createContext();
const Provider = ({children}) => {
    return (
        <userContext.Provider value={userData}>{children}</userContext.Provider>
    )
}

export default Provider