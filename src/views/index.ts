import vscode from "@src/global/vscode"
import { webviewRegisterCommand, basicWebviewRegisterCommand } from "./web"
import { treeRegisterCommand } from "./tree"
import { ItreeProvideDetail, IwebviewRegisterCommand } from "@src/interfaces"
import { CreateTreeOutlines } from "@src/functions/createOutline"


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
    panel.onDidDispose(() => {
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
            thisWebview.webview.options = { enableScripts: true };
            thisWebview.webview.html = html(thisWebview);
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