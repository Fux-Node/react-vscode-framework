import vscode from "@src/global/vscode"
import { webviewRegisterCommand } from "./web"
import { treeRegisterCommand } from "./tree"
import { ItreeProvideDetail, IwebviewRegisterCommand } from "@src/interfaces"
import { CreateTreeOutlines } from "@src/functions/createOutline"


export default {
    registerWebviewCommand: webviewRegisterCommand,
    registerTreeCommand: treeRegisterCommand
}

export function createWebViewPanel(context: vscode.ExtensionContext, detail: IwebviewRegisterCommand) {
    let panel = vscode.window.createWebviewPanel(
        "webview",
        detail.name,
        detail.viewColumn ? detail.viewColumn : vscode.ViewColumn.Active
    )
    panel.iconPath = vscode.Uri.joinPath(
        context.extensionUri,
        "src",
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

export function createTreeViewProvider(id:string ,data: ItreeProvideDetail) {
    vscode.window.registerTreeDataProvider(
        id,
        new CreateTreeOutlines([data])
    );
}