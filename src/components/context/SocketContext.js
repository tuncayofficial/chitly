import { useState, createContext, useContext, useEffect } from "react"

const SocketContext = createContext()

export const useSocket = () => {
    return useContext(SocketContext)
}

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState({})

    const value = {
        socket
    }

    return (
        <SocketContext.Provider value = {value}>
         {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider