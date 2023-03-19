import { IreceiveMessage } from "@src/interfaces";
import exeCommands from "./commands";
import { globalClear, globalFetch, globalStore } from "./store";
import { sendData } from "./e2w";

export default function receiveMessage(data: IreceiveMessage, command: string) {
    if (data.type === "command") {
        exeCommands(data)
    } else if (data.type === "clear") {
        globalClear(data.key)
    } else if (data.type === "fetch") {
        const value = globalFetch(data.key)
        sendData(command, "globalFetch", value)
    } else if (data.type === "store") {
        globalStore(data.key, data.data)
    }
}