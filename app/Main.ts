import { BrowserWindow } from "electron"
import {PythonShell} from 'python-shell'

export default class Main {
    static mainWindow: Electron.BrowserWindow
    static application: Electron.App
    static BrowserWindow
    
    // Here we run the Python script and print the result in console
    private static runPython() {
        PythonShell.run(`${__dirname}/hello.py`, null, (err, res) => {
            if (err) throw err
            console.log("Result: ", res)
        })
    }

    // Method for quitting when all windows al closed
    private static onWindowAllClosed() {
        // On macOS it is common for Apps to stay open until explicitly
        // closed using Cmd+Q
        if (process.platform !== "darwin") {
            Main.application.quit()
        }
    }

    // Method to close app
    private static onClose() {
        // Deref window object
        Main.mainWindow = null
    }

    // Method for creating App and running Code
    private static onReady() {
        // Create the window
        Main.mainWindow = new Main.BrowserWindow({width: 800, height: 600})
        // Load index.html
        Main.mainWindow.loadURL(`file://${__dirname}/index.html`)
        // Open devtools
        // Main.mainWindow.webContents.openDevTools()
        // Bind onClose here
        Main.mainWindow.on('closed', Main.onClose)
        // Explicitly run Python script
        Main.runPython()
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // Pass the Electron.App object and the Electron.BrowserWindow 
        // into this function so this class has no dependencies. 
        // This makes the code easier to write tests for.
        Main.BrowserWindow = browserWindow
        Main.application = app

        // Bind methods to events
        Main.application.on('ready', Main.onReady)
        Main.application.on('window-all-closed', Main.onWindowAllClosed)
    }
}