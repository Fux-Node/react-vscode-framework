import * as vscode from 'vscode';
import { assignContext } from './global/middlewares/store';
import registerCommands from './commands';
import { default as Views, createBasicWebViewPanel, createTreeViewProvider, createWebViewPanel } from "./views"

export function activate(context: vscode.ExtensionContext) {
	/* 
	Assigning the context for access globalStorage.
	*/
	assignContext(context);

	/* 
	Register the commands only. check the folder src/commands/index.ts file for register.
	make sure to add your command functions would be in correct folder (public or private).
	*/
	registerCommands.map((reg) => {
		context.subscriptions.push(
			vscode.commands.registerCommand(reg.name, reg.value)
		)
	})

	/* 
	Register the webview only. check the folder src/views/web/index.ts file for register.
	make sure to add your command functions would be in correct folder (public or private).
	*/
	Views.registerWebviewCommand.map((detail) => {
		context.subscriptions.push(
			vscode.commands.registerCommand(detail.command, () => {
				createWebViewPanel(context, detail)
			})
		)
	})
	
	//Basic Web view registers
	Views.registerBasicWebviewCommand.map((detail) => {
		createBasicWebViewPanel(context, detail.id, detail.html)
	})

	/* 
	Register the tree only. check the folder src/views/tree/index.ts file for register.
	*/
	Views.registerTreeCommand.map((detail) => {
		context.subscriptions.push(
			vscode.commands.registerCommand(detail.command, () => {
				createTreeViewProvider(detail.id, detail.data)
			})
		)
	})
}

export function deactivate() { }