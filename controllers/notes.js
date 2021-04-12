const Note = require('../models/notes')

module.exports = {
    index: async (req, res) => {
        try {
            let notes = await Note.find()
            res.render('index', {notes: notes});
        } catch {
            res.redirect('/notes')
        }    
    }, 

    // Tao note moi 
    createGet: (req, res) => {
        res.render('create');
    }, 
    createPost: async (req, res) => {
        let note = new Note({
            head: req.body.head, content: req.body.content
        });
        try {
            let newNote = await note.save()
            console.log(newNote)
            res.redirect('/notes')   
        } catch {
            res.render('create', {
                note: note, 
                errorMess: "Lỗi khi tạo ghi chú"
            })
        }
            
    }, 
    edit: async (req, res) => {
        try {
            let idNote = req.params.id;
            let note = await Note.findOne({_id: idNote})
            res.render('edit', {note: note})
        } catch {
            res.redirect('/notes')
        }  
    },
    update: async (req, res) => {
        let note
        try {
            note = await Note.findById(req.params.id)
            await note.update({head: req.body.head, content: req.body.content})
            res.redirect('/notes')
        } catch {
            if (note == null){
                res.redirect('/notes') 
            } else {
                res.redirect(`/notes/${note._id}/edit`)
            }  
        }
        

    }, 
    delete: async (req, res) => {
        try {
            let note = await Note.findById(req.params.id)
            await note.remove()
            res.redirect('/notes')
        } catch {
            res.redirect('/notes')
        }
    }
}
    


