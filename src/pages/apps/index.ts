import { IwebPagesBuilding } from "@src/interfaces/web";
import { ABOUT_WEB_VIEW, WELCOME_WEB_VIEW } from "@src/types/webview";
import About from "./about";
import Welcome from "./welcome";

const appsOfreact: IwebPagesBuilding[] = [
    {
        id: ABOUT_WEB_VIEW,
        component: About
    },
    {
        id: WELCOME_WEB_VIEW,
        component: Welcome
    }
]

export default appsOfreact;