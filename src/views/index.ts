import vscode from "@src/global/vscode"
import { webviewRegisterCommand, basicWebviewRegisterCommand } from "./web"
import { treeRegisterCommand } from "./tree"
import { ItreeProvideDetail, IwebviewRegisterCommand } from "@src/interfaces"
import { CreateTreeOutlines } from "@src/functions/createOutline"
import { assignPanel, clearPanel } from "@src/global/middlewares/e2w"
import receiveMessage from "@src/global/middlewares/receiveMsg"


export default {
    registerWebviewCommand: webviewRegisterCommand,
    registerBasicWebviewCommand: basicWebviewRegisterCommand,
    registerTreeCommand: treeRegisterCommand
}

export function createWebViewPanel(context: vscode.ExtensionContext, detail: IwebviewRegisterCommand) {
    let panel = vscode.window.createWebviewPanel(
        "webview",
        detail.name,
        detail.viewColumn ? detail.viewColumn : vscode.ViewColumn.Active
    )
    assignPanel(detail.command, panel)
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
    panel.webview.html = detail.html(panel)
    panel.webview.onDidReceiveMessage((msg) => {
        receiveMessage(msg,detail.command);
    })
    panel.onDidDispose(() => {
        clearPanel(detail.command)
        if (detail.onClose) {
            detail.onClose()
        }
    }, null, context.subscriptions)
}

export function createBasicWebViewPanel(context: vscode.ExtensionContext, id: string, html: (panel: vscode.WebviewView) => string) {
    let exploreProvider: vscode.WebviewViewProvider = {
        resolveWebviewView: function (
            thisWebview: vscode.WebviewView,
        ) {
            assignPanel(id, thisWebview)
            thisWebview.webview.options = { enableScripts: true };
            thisWebview.webview.html = html(thisWebview);
            thisWebview.webview.onDidReceiveMessage((msg) => {
                receiveMessage(msg,id);
            })
        },
    };

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            id,
            exploreProvider
        )
    );
}

export function createTreeViewProvider(id: string, data: ItreeProvideDetail) {
    vscode.window.registerTreeDataProvider(
        id,
        new CreateTreeOutlines([data])
    );
}