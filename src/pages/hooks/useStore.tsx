import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { GlobalStoreContext } from '../context/globalStore'
import { webGlobalClear, webGlobalFetch, webGlobalStore } from '@src/global/middlewares/w2e';

const useStore = () => {
    const { fetchData } = useContext(GlobalStoreContext);
    const localSet = (key: string, value: any) => {
        webGlobalStore(key, value)
    }
    const getFnc = (key: string) => {
        webGlobalFetch(key);
    }
    const localClear = (key: string) => {
        webGlobalClear(key)
    }
    return {
        localSet,
        localGet: {
            get: getFnc,
            result: fetchData
        },
        localClear
    }
}
export default useStore;