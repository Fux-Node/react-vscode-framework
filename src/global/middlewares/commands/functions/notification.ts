import vscode from "@src/global/vscode";
import { Inotification } from "@src/interfaces";

export default function notification(data: Inotification) {
    if (data.type === "error") {
        vscode.window.showErrorMessage(data.message)
    } else if (data.type === "information") {
        vscode.window.showInformationMessage(data.message)
    } else if (data.type === "warning") {
        vscode.window.showWarningMessage(data.message)
    }
}