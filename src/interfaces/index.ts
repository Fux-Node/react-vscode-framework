import vscode from "@src/global/vscode";
import { ExtensionContext, WebviewPanel, WebviewView } from "vscode";

export interface IregisterCommand {
    name: string;
    value: any;
}

export interface IwebviewRegisterCommand {
    command: string;
    name: string;
    icon: string;
    html: (panel: WebviewPanel) => string;
    onClose?: () => any;
    viewColumn?: vscode.ViewColumn
}

export interface ItreeProvideDetail {
    label: string
    children?: ItreeProvideDetail[]
}


export interface ItreeRegisterCommand {
    command : string;
    id : string;
    data : ItreeProvideDetail
}

export interface IbasicWebviewRegisterCommand {
    id : string;
    html : (panel: WebviewView) => string;
}