const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/dojo');

app.use(bodyParser.json());
app.use(cors());

sequelize
.authenticate()
.then(() => {
  console.log('Sukses terhubung ke PostgreSQL');
})
.catch(err => {
  console.error('Gagal terhubung ke PostgreSQL:', err);
});

const Ninja = sequelize.define('ninja', {
    nama: {type: Sequelize.STRING},
    usia: {type: Sequelize.INTEGER}
  });

Ninja.sync({force: false}).then(() => {
    console.log('Tabel dibuat!')
  });

app.get('/data', function(req,res){
  Ninja.findAll().then(data => {
    console.log(data);
    res.send(data);
  })
})

app.post('/data', function(req,res){
Ninja.create({
    nama: req.body.nama,
    usia: req.body.usia
}).then(data => {
  console.log('Data masuk!');
  res.send({
		status: 'Data sukses diinput!',
		nama: req.body.nama,
		usia: req.body.usia
  })
});
})

app.listen(3210, ()=>{
  console.log('Server @port 3210 gan!')
})