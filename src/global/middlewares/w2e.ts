const vsCode = (global as any).acquireVsCodeApi();

export const sendCommand = (command:string,args?:any) => {
    vsCode.postMessage({
        type : "command",
        command,
        data : args
    });
};

export const webGlobalStore = (key: string, value: any) => {
    vsCode.postMessage({
        type : "store",
        key,
        data : value
    });
}

export const webGlobalFetch = (web:string , key: string) => {
    vsCode.postMessage({
        type : "fetch",
        key
    });
}

export const webGlobalClear = (key: string) => {
    vsCode.postMessage({
        type : "clear",
        key
    });
}