import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = (props) => {
    
    const [userInfo, setUserInfo] =useState({})

    return (
        <StateContext.Provider value={[userInfo, setUserInfo]}>
            {props.children}
        </StateContext.Provider>
    )
}