import { ABOUT_WEB_VIEW_COMMAND, WELCOME_WEB_VIEW_COMMAND } from "@src/types/webview";
import aboutWebView from "./private/about";
import { IwebviewRegisterCommand } from "@src/interfaces";
import welcomeWebView from "./public/welcome";

export const webviewRegisterCommand: IwebviewRegisterCommand[] = [
    {
        command: ABOUT_WEB_VIEW_COMMAND,
        name: "About",
        icon: "reactvscodecolor.png",
        html: aboutWebView
    },
    {
        command: WELCOME_WEB_VIEW_COMMAND,
        name: "Welcome",
        icon: "reactvscodecolor.png",
        html: welcomeWebView
    },
]