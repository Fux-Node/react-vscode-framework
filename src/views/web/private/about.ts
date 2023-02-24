import getNonce from "@src/functions/getNonce";
import vscode from "@src/global/vscode";
import { ABOUT_WEB_VIEW } from "@src/types/webview";
import path from "path";

export default function aboutWebView(
	panel: vscode.WebviewPanel,
	context: vscode.ExtensionContext
  ) {
   let scriptMain = panel.webview.asWebviewUri(
	  vscode.Uri.file(path.join(__dirname, "bundle.js"))
	);
  
	const nonce = getNonce();
  
	return `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta http-equiv="X-UA-Compatible" content="IE=edge">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <link rel="preconnect" href="https://fonts.googleapis.com">
		  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
		  <link rel="preconnect" href="https://stijndv.com">
		  <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css">
		  <title>Vscode Extension</title>
	  </head>
	  <body>
		  <div id="${ABOUT_WEB_VIEW}"></div>
	  </body>
	  <script nonce="${nonce}" src="${scriptMain}"></script>
	  </html>`;
  }