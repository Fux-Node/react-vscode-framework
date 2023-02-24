import React, { useEffect } from 'react'
import SubBasic from '../components/basic';
import { sendCommand } from '@src/global/middlewares/w2e';
import { TS_TREE_COMMAND } from '@src/types/tree';

const Basic = () => {
    useEffect(() => sendCommand(TS_TREE_COMMAND), [])
    return (
        <SubBasic />
    )
}

export default Basic;