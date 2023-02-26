import { JSON_TREE, JSON_TREE_COMMAND, TS_TREE, TS_TREE_COMMAND } from "@src/types/tree";
import { dataObject } from "./data/example";
import jsonDataObject from "./data/example.json"
import { ItreeRegisterCommand } from "@src/interfaces";

export const treeRegisterCommand: ItreeRegisterCommand[] = [
    {
        command: TS_TREE_COMMAND,
        id: TS_TREE,
        data: dataObject
    },
    {
        command: JSON_TREE_COMMAND,
        id: JSON_TREE,
        data: jsonDataObject
    }
]