# python_electron_template

A very simple starter project for running Python from an Electron App.

The example app runs two Python script: 
1) `hello.py` which prints the result in the console. 
2) `flask_app.py` which creates a flask development server at
port 5000 and serves a Hello World homepage.

### Getting Started

**[Typescript](https://www.npmjs.com/package/typescript) required** 
(Can be installed with `npm install -g typescript`)

**Python 3 required**

- Install NPM packages => `npm install`
- Install Python packages (recommended inside virtual environment) 
=> `pip install -r requirements.txt`
- Transpile and copy app to dist => `npm run build`
- Start electron => `npm start`