// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	console.log("activate called");
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "short-run" is now active!');
	let rna = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	let rni = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	rni.command = 'extension.runRNI';
	rna.command = 'extension.runRNA';
	rni.text = "Run RNIOS";
	rna.text = "Run RNAndroid";
	rna.show();
	rni.show();
	
	// React native shake screen
	let rnDebug = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	rnDebug.command = 'extension.runDebug';
	rnDebug.text = "RN Debug";
	rnDebug.show();

	let gitAdd = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	gitAdd.command = 'extension.runGitAdd';
	gitAdd.text = "Git Add";
	gitAdd.show();


	let gitPush = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	gitPush.command = 'extension.runGitPush';
	gitPush.text = "Git Push";
	gitPush.show();

	// adb devices
	let runDevices = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	runDevices.command = 'extension.runAdbDevices';
	runDevices.text = "Android Devices";
	runDevices.show();

	// open Terminal

	let openTerminal = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	openTerminal.command = 'extension.runTerminal';
	openTerminal.text = "Terminal";
	openTerminal.show();


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.TerminalShort', function () {
		// The code you place here will be executed every time your command is executed
		
		context.subscriptions.push(rna);

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
	});
	let runReactNativeAndroid = vscode.commands.registerCommand('extension.runRNA', function () {
		runCommand("react-native run-android");
		vscode.window.showInformationMessage('Running React-Native Android!');
	});

	let runReactNativeIOS = vscode.commands.registerCommand('extension.runRNI', function () {
		runCommand("react-native run-android");
		vscode.window.showInformationMessage('Running React-Native IOS!');
	});

	let runReactNativeDebug = vscode.commands.registerCommand('extension.runDebug', function () {
		runCommand("adb shell input keyevent 82");
		vscode.window.showInformationMessage('Running React-Native Debug!');
	});

	let runGitAdd = vscode.commands.registerCommand('extension.runGitAdd', function () {
		runCommand("git add .");
		vscode.window.showInformationMessage('Git Adding!');
	});

	let runGitPush = vscode.commands.registerCommand('extension.runGitPush', function () {
		runCommand("git Push");
		vscode.window.showInformationMessage('Git pushing!');
	});


	let runAdbDevices = vscode.commands.registerCommand('extension.runAdbDevices', function () {
		runCommand("adb devices");
	});

	let openTerminalCommand = vscode.commands.registerCommand('extension.runTerminal', function () {
		runCommand("");
	});


	//
	context.subscriptions.push(rna);
	context.subscriptions.push(rni);
	context.subscriptions.push(rnDebug);
	context.subscriptions.push(gitAdd);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function runCommand(command) {
	const terminal =  vscode.window.createTerminal(`Ext Terminal #2`);
	terminal.show();
	terminal.sendText(command);
}

module.exports = {
	activate,
	deactivate
}
