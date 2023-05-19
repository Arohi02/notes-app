const fs= require('fs')
const chalk= require('fs')
const { title } = require('process')

const getNotes =()=>{
    return "Your notes ... "
}

 const addNotes=(title,body)=>{
    const notes= loadNotes()

    // const duplicateNotes= notes.filter(function(note){
    //     return note.title===title
    // })

    // const duplicateNotes= notes.filter((note)=>note.title===title)
    const duplicateNote = notes.find((note)=>note.title===title)

    if(!duplicateNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added!')
    }
    else {
        console.log('Note title taken')
    }
    // notes.push({
    //     title: title,
    //     body:body
    // })
    // saveNotes(notes)
 }

const removeNotes=function(title){
    const notes = loadNotes()
    const notesToKeep=notes.filter(function(notes)
    {
        return notes.title!== title
    })
    if(notes.length>notesToKeep.length)
    {
        saveNotes(notesToKeep)
        console.log("note removed")
    }
    else{
        console.log("No note found")
    }
}

//     if(notes.length>notes.notesToKeep.length){
//         console.log(chalk.green.inverse('Note Removed'))
//         saveNotes(notesToKeep)
//     }else {
//         console.log(chalk.blue.inverse('No note found'))
//     }
//     saveNotes(notesToKeep)
// }

const listNotes=()=>{
    const notes=loadNotes()

    console.log('your notes')

    notes.forEach((note)=> {
        console.log(note.title)
        
    })

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

 const loadNotes= function(){
    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const readNotes = (title) =>{
    const notes =loadNotes()
    const note =notes.find((notes) => note.title ===title)

    if(note){
        console.log(note.title)
        console.log(note.body)

    }

    else {
        console.log('note not found!')
    }
}



module.exports ={
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
