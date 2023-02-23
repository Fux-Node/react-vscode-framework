import { IwebPagesBuilding } from "@src/interfaces/web";
import { ABOUT_WEB_VIEW } from "@src/types/webview";
import About from "./about";

const appsOfreact: IwebPagesBuilding[] = [
    {
        id: ABOUT_WEB_VIEW,
        component: About
    }
]

export default appsOfreact;