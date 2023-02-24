import { TS_TREE, TS_TREE_COMMAND } from "@src/types/tree";
import { dataObject } from "./data/example";
import { ItreeRegisterCommand } from "@src/interfaces";

export const treeRegisterCommand: ItreeRegisterCommand[] = [
    {
        command: TS_TREE_COMMAND,
        id: TS_TREE,
        data: dataObject
    }
]