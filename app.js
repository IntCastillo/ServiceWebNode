const express = require('express');

const app = express();

const places = [
  {
    'title': 'Oficina CristianSAM',
    'description': 'Lorem Ipsum',
    'address': 'Lorem Ipsum'
  },
  {
    'title': 'Oficina CristianSAM',
    'description': 'Lorem Ipsum',
    'address': 'Lorem Ipsum'
  },
  {
    'title': 'Oficina CristianSAM',
    'description': 'Lorem Ipsum',
    'address': 'Lorem Ipsum'
  },

];

app.get('/',(req,res)=>{
  res.json(places);
});

app.use(express.static('public'));


 app.listen(3000, function(){
     console.log('Estoy listo para recibir peticiones');
 });
