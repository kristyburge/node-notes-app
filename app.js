const yargs = require('yargs');
const notes = require('./notes');

// print `node app.js --help` to see some help tools for yargs 
yargs.version('1.1.0');

// ADD NOTES 
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // make this field required
      type: 'string' // verify field type
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
    notes.addNote(argv.title, argv.body);
  }
});

// REMOVE NOTES 
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    notes.removeNote(argv.title);
  }
});

// LIST NOTES 
// list all notes
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

// READ NOTE 
// reading the note
yargs.command({
  command: 'read',
  describe: 'Read a specific note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title);
  }
}); 

// IMPT: We must either console.log(yargs.argv) OR use yargs.parse() so that yargs knows to do something. 
// alwasy at the end of the file! 
yargs.parse();
// console.log(yargs.argv);

// END YARGS 
// ===========================

// COMMAND LINE ARGUMENTS: 
// console.log(process.argv);

// const command = process.argv[2];

// if(command === 'add') {
//   console.log('Adding a note');
// } else if(command === 'remove') {
//   console.log('Removing note');
// }

// Dump command line arguments
// argument vector (argv) - this is an array
// 1. path to node executable
// 2. path to the file
// 3. value provided as a cmd line argument

