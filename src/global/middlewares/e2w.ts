let GlobalWebPanel: any = [];

export const assignPanel = (key: string, value: any) => {
    GlobalWebPanel.push({ name: key, value });
};

export const clearPanel = (key: string) => {
    GlobalWebPanel.splice(GlobalWebPanel.findIndex((i: any) => i.name === key), 1);
};

export const sendData = (panel: string, relation: string, data?: any) => {
    const activePanel = GlobalWebPanel.filter((item: { name: string }) => item.name === panel)[0]?.value;
    activePanel?.webview.postMessage({ relation, data });
};