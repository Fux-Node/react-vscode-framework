import React, { createContext, useEffect, useState } from "react";

export const GlobalStoreContext = createContext<{
    fetchData: any,
}>({
    fetchData: "",
})

const GlobalStorage = ({ children }: any) => {
    const [fetchData, setFetchData] = useState<any>("")
    const initState = {
        fetchData,
    }
    useEffect(() => {
        window.addEventListener('message', (event) => {
            const { relation, data } = event.data;
            switch (relation) {
                case "globalFetch":
                    setFetchData(data === undefined ? "" : data)
                    break;
                default:
                    break;
            }
        })
    }, [])
    return (
        <GlobalStoreContext.Provider value={initState}>
            {children}
        </GlobalStoreContext.Provider>
    )
}

export default GlobalStorage;