import vscode from "@src/global/vscode";
import { ExtensionContext, WebviewPanel } from "vscode";

export interface IregisterCommand {
    name: string;
    value: any;
}

export interface IwebviewRegisterCommand {
    command: string;
    name: string;
    icon: string;
    html: (panel: WebviewPanel, context: ExtensionContext) => string;
    onClose?: () => any;
    viewColumn?: vscode.ViewColumn
}