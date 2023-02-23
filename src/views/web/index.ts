import { ABOUT_WEB_VIEW_COMMAND } from "@src/types/webview";
import aboutWebView from "./public/about";
import { IwebviewRegisterCommand } from "@src/interfaces";

export const webviewRegisterCommand:IwebviewRegisterCommand[] = [
    {
        command : ABOUT_WEB_VIEW_COMMAND,
        name : "About",
        icon : "foxmask.svg",
        html : aboutWebView
    }
]