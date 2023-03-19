import React, { useEffect } from 'react'
import SubBasic from '../components/basic';
import { executeCommand, sendCommand } from '@src/global/middlewares/w2e';
import { JSON_TREE_COMMAND, TS_TREE_COMMAND } from '@src/types/tree';

const Basic = () => {
    useEffect(() => {
        /*
        we created separate function for TS_TREE view. 
        executeCommand function can execute all registered command by pass the command name. 
        check file : @src/global/middleware/commands/index.ts 
        */
        sendCommand(TS_TREE_COMMAND)
        executeCommand(JSON_TREE_COMMAND)
    }, [])
    return (
        <SubBasic />
    )
}

export default Basic;