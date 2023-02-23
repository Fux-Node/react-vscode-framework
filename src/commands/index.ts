import { IregisterCommand } from "@src/interfaces";
import * as commandNames from "@src/types/commands";

/* public */
import helloWorld from "./public/helloWorld";

/* private */
import byeWorld from "./private/byeWorld";


const registerCommands: IregisterCommand[] = [
    {
        name : commandNames.HELLO_WORLD_COMMAND,
        value : helloWorld
    },
    {
        name : commandNames.BYE_WORLD_COMMAND,
        value : byeWorld
    }
]


export default registerCommands;