import vscode from "@src/global/vscode";

export default function focus_my_extension(){
    const MY_EXTENSION_VIEW_ID = "reactvscode-explorer"
    vscode.commands.executeCommand('workbench.view.extension.' + MY_EXTENSION_VIEW_ID);
}