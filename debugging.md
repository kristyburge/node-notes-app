# Debugging Node
## Console.log
Use console.log statements. 

## Debugger
When console.log becomes too overwhelming (dealing with 5-6+ statements), then more helpful ways to debug is using the debugger tool: 
* Type `debugger` at place(s) in the script where you want to pause.
* `node inspect [command]`
* Open up Chrome `chrome://inspect`
* Under **Remote Target** you will see `127.0.0.1:9229` and `localhost:9229`. These are duplicates. If you are missing one, go to `Configure...` and add the missing target.

### Add folder to developer tools
- Click ` + Add folder to workspace`
- Allow access 
- Green icon is currently open
- Line highlighted in blue is where debugger is currently paused
- Start debugger with blue play button "Resume executing script" and the code will execute until it hits the debugger line
    - Check 'Scope' to see current values or log variables to the console
- Click "Play" again and the script will finish.
- When you close down developer tools, the remote target is now gone from the `chrome://inspect` page.
    - If you need to restart the debugger, go back into Terminal and type `restart` which will open back up the target in Chrome. 
    - Rinse and repeat from the top.
- To exit 'debugger' from command line, click `Ctrl + C` twice to exit.

### To keep 'Sources' and 'Console' open at the same time
- Click `esc` when on the Sources tab and the Console will open below
