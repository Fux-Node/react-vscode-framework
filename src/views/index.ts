import vscode from "@src/global/vscode"
import { webviewRegisterCommand } from "./web"
import { IwebviewRegisterCommand } from "@src/interfaces"


export default {
    registerWebviewCommand: webviewRegisterCommand
}

export function createWebViewPanel(context: vscode.ExtensionContext, detail: IwebviewRegisterCommand) {
    let panel = vscode.window.createWebviewPanel(
        "webview",
        detail.name,
        detail.viewColumn ? detail.viewColumn : vscode.ViewColumn.Active
    )
    panel.iconPath = vscode.Uri.joinPath(
        context.extensionUri,
        "constants",
        "web",
        detail.icon
    )
    panel.webview.options = {
        enableScripts: true
    }
    panel.webview.html = detail.html(panel, context)
    panel.onDidDispose(() => {
        if (detail.onClose) {
            detail.onClose()
        }
    }, null, context.subscriptions)
}