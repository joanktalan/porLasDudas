//req.body para recuperar del body
//req.params para recuperar de la /url
//req.query para recuperar de las querys ?search=xxx


//"Dependencias"

const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const loginRoutes = require('./src/routes/loginRoutes');


const PORT = 3003;

// TEMPLATE ENGINES

app.set('template engine', 'ejs');
app.set('views', path.join(__dirname, "./src/views"))



//Middlewares de configuracion
app.use(express.static('public_html'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

//Rutas

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/auth', loginRoutes);


app.use((req,res)=>{
    res.status(404).send('La pagina que buscas no existe.');
})


app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));
