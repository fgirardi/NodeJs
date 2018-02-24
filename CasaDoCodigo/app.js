var app = require('./config/express')();

app.set('view engine','ejs');

app.get('/produtos',function (req,res) {
	console.log('Listando  produtos');
	res.render("produtos/lista");
});

app.listen('3000',function(){
		console.log("Servidor Rodando na porta 3000");
});
