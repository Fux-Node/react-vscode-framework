import * as _ from 'lodash';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { default as Apps } from "./apps"
import ContextProps from './context';
import "@styles/global.css"

Apps.map((detail) => {
    const getElement = document.getElementById(detail.id);
    if (getElement) {
        const root = createRoot(getElement);
        const ViewComponent = detail.component;
        return (
            root.render(
                <React.StrictMode>
                    <ContextProps>
                        <ViewComponent />
                    </ContextProps>
                </React.StrictMode>
            )
        );
    }
});