import execute_command from "@src/global/middlewares/commands/functions/execute_command";
import { WELCOME_WEB_VIEW_COMMAND } from "@src/types/webview";

export default function initialize(){
    execute_command(WELCOME_WEB_VIEW_COMMAND)
}