import { ABOUT_WEB_VIEW_COMMAND, WELCOME_WEB_VIEW_COMMAND } from "@src/types/webview";
import aboutWebView from "./public/about";
import { IwebviewRegisterCommand } from "@src/interfaces";
import welcomeWebView from "./private/welcome";

export const webviewRegisterCommand: IwebviewRegisterCommand[] = [
    {
        command: ABOUT_WEB_VIEW_COMMAND,
        name: "About",
        icon: "foxmask.svg",
        html: aboutWebView
    },
    {
        command: WELCOME_WEB_VIEW_COMMAND,
        name: "Welcome",
        icon: "foxmask.svg",
        html: welcomeWebView
    },
]