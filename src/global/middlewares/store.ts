import vscode from "../vscode";

let context: vscode.ExtensionContext;

export const assignContext = (ctx: vscode.ExtensionContext) => {
    context = ctx;
};


export const globalStore = (key: string, value: any) => {
    context.globalState.update(key, value);
};

export const globalFetch = (key: string) => {
    return context.globalState.get(key);
};

export const globalClear = (key:string) => {
    context.globalState.update(key,undefined);
};