
import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {


	console.log('Congratulations, your extension "vscodeextension" is now active!');


	let disposable = vscode.commands.registerCommand('vscodeextension.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World from VsCodeExtension!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
