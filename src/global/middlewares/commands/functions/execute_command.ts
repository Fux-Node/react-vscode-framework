import vscode from "@src/global/vscode";
import { TS_TREE_COMMAND } from "@src/types/tree";

export default function execute_command(command:string){
    vscode.commands.executeCommand(command);
}