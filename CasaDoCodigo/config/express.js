var app =  require('express')();
app.set('view engine','ejs'); //Setando o motor de views.
app.set('views','./app/views');
module.exports = function (){
	return app;
}