import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalStoreContext } from '../context/globalStore'
import { webGlobalClear, webGlobalFetch, webGlobalStore } from '@src/global/middlewares/w2e';


const useStore = () => {
    const { fetchData } = useContext(GlobalStoreContext);
    const result = useRef<any>();

    useEffect(() => {
        result.current = fetchData
    }, [fetchData])

    const localSet = (key: string, value: any) => {
        webGlobalStore(key, value)
    }

    const localGet = async (key: string) => {
        webGlobalFetch(key);
        await new Promise(resolve => setTimeout(resolve, 500));
        return result.current
    }
    const localClear = (key: string) => {
        webGlobalClear(key)
    }
    return {
        localSet,
        localGet,
        localClear
    }
}
export default useStore;