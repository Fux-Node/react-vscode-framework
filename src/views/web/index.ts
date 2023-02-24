import { ABOUT_WEB_VIEW_COMMAND, BASIC_WEB_VIEW, WELCOME_WEB_VIEW_COMMAND } from "@src/types/webview";
import aboutWebView from "./private/about";
import { IbasicWebviewRegisterCommand, IwebviewRegisterCommand } from "@src/interfaces";
import welcomeWebView from "./public/welcome";
import basicWebView from "./base/basic";

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

export const basicWebviewRegisterCommand:IbasicWebviewRegisterCommand[] = [
    {
        id : BASIC_WEB_VIEW,
        html : basicWebView
    }
]