// const add =require('./utils.js')
// const sum = add(3,6)
// console.log(sum)
// import validator from 'validator'
// import getNotes from './notes.mjs'
// import chalk from 'chalk'
// import yargs from 'yargs'


const yargs = require('yargs')
const notes = require('./notes.js')
// const chalk = require('chalk')
// async function chalk() {
//     return (await import("chalk")).default;
  //}
// console.log(chalk.bold.inverse.bgRed("True"))


// // const msg= getNotes()

// // console.log(validator.isURL('/www.npmjs.com/package/validator'))

// const command= process.argv[2]

// console.log(process.argv)

// console.log(yargs(process.argv).argv)


// create add command 
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },

    body:{
        describe:'Adding the body',
        demandOption:true,
        type:'string'

    },
    handler(argv){
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)

        notes.addNotes(argv.title, argv.body)
    }
})


// remove command 
yargs.command({
    command: 'remove',
    describe:'Remove a new note',
    builder:{
        title:{
            describe:'Remove Title',
            demandOption: true,
            type:'string'
    }
   } ,
    handler(argv){
        notes.removeNotes(argv.title)
    }
})


// list command
yargs.command({
    command: 'list',
    describe:'Add to the list',
    handler(){
        notes.listNotes()
    }
})

// read command 
yargs.command({
    command: 'read',
    describe:'Read the note',
    builder:{
        title:{
            describe:'Read the title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        console.log(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing Note')
// }

