# A Command Line Notes App

First, make sure you have **[Node.js](https://nodejs.org/en/)** installed. 

Then, clone this project. 

Run `npm install` to install project dependencies. 

## Commands & Options to use this app: 
Listed below each command you will see an example of how to use the command and pass options to the flags.

### add
Example: `node app.js add --title="SOME TITLE" --body="YOUR CONTENT HERE"`
* this command requires two options: 
    1. `--title`: title of your note as a string
    2. `--body`: body of your note as a string

### remove 
Example: `node app.js remove --title="TITLE OF NOTE TO REMOVE"`
* this command requires one option
    1. `--title`: title of your note as a string

### list 
Example: `node app.js list` 

### read 
Example: `node app.js read --title="TITLE OF NOTE TO READ"`
* this command requires one option
    1. `--title`: title of your note as a string

### help 
Example: `node app.js --help` 

This command allows you to review the list of commands and related arguments available for this app.

* provide the `--help` flag to review command options

