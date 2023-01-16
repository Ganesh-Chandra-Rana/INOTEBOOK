const { default: mongoose } = require("mongoose");

// create schema for note.
const NoteSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
   description:{
        type:string,
        required:true,
    },
    tag:{
        type:string,
        default:'General'
    },
    date:{
        type:Date,
        default:Date.now

    }
  });
  module.exports=mongoose.model('notes',NoteSchema);