import vscode from "@src/global/vscode";

export default function openweb(url: string) {
    const URI = vscode.Uri.parse(url)
    vscode.env.openExternal(URI)
}