import React from 'react'
import GlobalStorage from './globalStore'

const ContextProps = ({ children }: any) => {
    return (
        <GlobalStorage>
            {children}
        </GlobalStorage>
    )
}

export default ContextProps