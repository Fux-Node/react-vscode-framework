import vscode from "@src/global/vscode";
import { TS_TREE_COMMAND } from "@src/types/tree";

export default function ts_tree_command(){
    vscode.commands.executeCommand(TS_TREE_COMMAND);
}