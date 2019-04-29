const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    // loop through notes array and make sure the title doesn't already exist
    // return true means there is a duplicate
    // const duplicates = notes.filter( note => note.title === title );
    
    // REFACTOR with .find():
    // use the .find() method to stop the filter process if a duplicate is found (we don't need to keep searching if we found a match on note 5, but there are 1000 notes)
    // .find() returns first match it finds, otherwise, returns undefined if no matches
    const duplicateNote = notes.find( note => note.title === title );
    
    // not a duplicate, so add the note
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added."));
    } else {
        console.log(chalk.red.inverse("Couldn't add note... this note title already exists"));
    }

   
}

const loadNotes = () => {
    try {
        // return array of notes
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(err) {
        // if the file doesn't exist, then return an empty array that can be used when the note is saved
        return [];
    }
}

// notes is an array
const saveNotes = (notes) => {
    // stringify the data and save to the file
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
    const allNotes = loadNotes();
    const final = allNotes.filter( note => note.title !== title );

    // Compare array lengths (did the filter change the original array?)
    if (allNotes.length > final.length) {
        console.log(chalk.green.inverse('Note removed!'));
        // only save the new array if it changed
        saveNotes(final);
    } else {
        console.log(chalk.red.inverse('Note not found...'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length !== 0) {
        console.log(chalk.cyan.inverse("Your Notes:"))
        notes.forEach( (note, i) => {
            console.log(`Note ${i + 1}: ${note.title}`);
        });
    } else {
        console.log(chalk.yellow.inverse("No notes yet... please add a new note first!"));
    }
    
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find( note => note.title === title ); 
    // console.log(noteToRead);
    if (noteToRead) {
        console.log(chalk.magenta.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red('Error. No note found. Please try again.'));
    }
};

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};