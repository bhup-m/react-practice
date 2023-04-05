import React, { createContext } from 'react'
import ChildA from './ChildA'
export const UserContext = createContext()

function UseContext() {
    return (
        <div>
            <UserContext.Provider value={"Sunny"}>
                <ChildA />
            </UserContext.Provider>
        </div>
    )
}

export default UseContext
