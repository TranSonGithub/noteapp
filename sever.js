const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const methodOverride = require('method-override')

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router note
const notes = require('./routers/notes');
app.use('/notes', notes);

app.get('/', (req, res)=> {
    res.send("This is firt note app!");
})

// Connect MongoDB
const urlDB = 'mongodb://localhost/notes'
mongoose.connect(urlDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (er) => console.log(er))
db.once ('open', () => console.log('Connect database success!'))

app.listen(port, ()=> {console.log("Server running at: http://localhost:" + port)});