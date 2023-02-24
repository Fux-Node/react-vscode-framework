import { ItreeProvideDetail } from "@src/interfaces";
import * as vscode from "vscode";

export class CreateTreeOutlines
    implements vscode.TreeDataProvider<ItreeProvideDetail> {

    constructor(private data: ItreeProvideDetail[]) { }

    getTreeItem(element: ItreeProvideDetail): vscode.TreeItem {
        return new vscode.TreeItem(
            element.label,
            (element.children?.length ?? 0) > 0
                ? vscode.TreeItemCollapsibleState.Expanded
                : vscode.TreeItemCollapsibleState.None
        );
    }

    getChildren(element?: ItreeProvideDetail): Thenable<ItreeProvideDetail[]> {
        return element && Promise.resolve(element.children ?? [])
            || Promise.resolve(this.data);
    }
}