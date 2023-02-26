let GlobalWebPanel: any = [];

export const assignPanel = (command: string, value: any) => {
    GlobalWebPanel.push({ name: command, value });
};

export const clearPanel = (command: string) => {
    GlobalWebPanel.splice(GlobalWebPanel.findIndex((i: any) => i.name === command), 1);
};

export const sendData = (command: string, relation: string, data?: any) => {
    const activePanel = GlobalWebPanel.filter((item: { name: string }) => item.name === command)[0]?.value;
    activePanel?.webview.postMessage({ relation, data });
};