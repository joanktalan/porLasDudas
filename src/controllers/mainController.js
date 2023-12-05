const path = require('path');

module.exports ={
    home: (req,res) => res.sendFile(path.resolve(__dirname,'../../public_html/index.html')),
    contacto: (req,res) => res.send('Soy contactos'),

}