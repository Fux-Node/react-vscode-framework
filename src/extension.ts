import * as vscode from 'vscode';
import { assignContext } from './global/store';
import registerCommands from './commands';

export function activate(context: vscode.ExtensionContext) {
	/* 
	Assigning the context for access globalStorage.
	*/
	assignContext(context);

	/* 
	Register the commands only. check the folder src/commands/index.ts file for register.
	make sure to add your command functions would be in correct folder (public or private).
	*/
	registerCommands.map((reg)=>{
		context.subscriptions.push(
			vscode.commands.registerCommand(reg.name,reg.value)
		)
	})
}

export function deactivate() { }