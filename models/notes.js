const mongoose = require('mongoose')

let noteSchema = new mongoose.Schema({
  id: { type: mongoose.ObjectId }, 
  head: { type: String, required: true }, 
  content: { type: String } 
})

module.exports = new mongoose.model('noteModel', noteSchema)