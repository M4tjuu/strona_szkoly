const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
 
app.use(cors())
app.use(express.json());
 
app.get('/', (req, res) => {
    res.send('Hello World!')
})
 
 
app.post('/add', (req, res) => {
    console.log(req.body);
    const lastId = data[data.length - 1].id;
    const newUser = {
        id: lastId + 1,
        name: req.body.imie,
        surname: req.body.nazwisko,
        age: req.body.wiek,
    };
    data.push(newUser);
    res.json({ message: `User with id: ${ newUser.id } added`})
});
 
 
 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
 
 
const data = [
    {
        id: 0,
        name: "matjuu",
        surname: "szym",
        age: 10,
    },
];
 
 
app.get('/info', (req, res) => {
    res.send(data)
})