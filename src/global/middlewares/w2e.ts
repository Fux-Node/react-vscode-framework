import { EXECUTE } from "@src/types/custom";

const vsCode = (global as any).acquireVsCodeApi();

export const sendCommand = (command: string, args?: any) => {
    vsCode.postMessage({
        type: "command",
        command,
        data: args
    });
};

export const webGlobalStore = (key: string, value: any) => {
    vsCode.postMessage({
        type: "store",
        key,
        data: value
    });
}

export const webGlobalFetch = (key: string) => {
    vsCode.postMessage({
        type: "fetch",
        key
    });
}

export const webGlobalClear = (key: string) => {
    vsCode.postMessage({
        type: "clear",
        key
    });
}


export const executeCommand = (command: string) => {
    sendCommand(EXECUTE, command)
}