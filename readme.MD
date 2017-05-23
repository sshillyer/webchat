# Chat Server Project

## Requirements
* typescript
* node
* express (not req but good idea)
* REACT

## User story
1. User presented with login --> Enter name, click and user is "logged in"
	1a. When a user logs in, a "user has connected" message is printed to all connected clients
2. User sees all of the messages that have happened on the chat server
	- Are these are in reverse chronological order with most recent on bottom next to the input, or most recent on top?
	- Put in a scrollable field?
	- Timestamp?
3. User has a text entry field where they can type a message and click "send"
4. The message is sent to the server and added to the chat history; all clients on the server refresh with the new data


## Usage
Compile:
    npm run build  # compiles to build/bundle.js
	tsc  # compiles to separate js files
Open index.html to view the page that renders the Hello React component using webpack, otherwise manually run the server.ts currently is basic node server; node build/server.js will run compiled version

## Status
Currently controllers 