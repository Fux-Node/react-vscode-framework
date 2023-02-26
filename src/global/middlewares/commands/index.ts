import { IreceiveMessage } from "@src/interfaces";
import { TS_TREE_COMMAND } from "@src/types/tree";
import ts_tree_command from "./functions/ts_tree_command";
import { EXECUTE, FOCUS_EXTENSION, NOTIFICATION } from "@src/types/custom";
import execute_command from "./functions/execute_command";
import focus_my_extension from "./functions/focus_my_extension";
import notification from "./functions/notification";

export default function exeCommands(data: IreceiveMessage) {
    const { command, data: value } = data;
    switch (command) {
        case TS_TREE_COMMAND:
            ts_tree_command();
            break;
        case EXECUTE:
            execute_command(value);
            break;
        case FOCUS_EXTENSION:
            focus_my_extension();
            break;
        case NOTIFICATION:
            notification(value);
            break;
        default:
            break;
    }
}