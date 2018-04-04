var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store!');
    next();
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
        name: "Moja aplikacja",
        url: "/auth/google"
    });
});

// app.get('/', function (req, res) {
// 	res.send('Hello!'); 
// });

app.get('/auth/google', function (req, res) {
	res.render('./auth/google');
});

// app.get('/first-template', function(req, res){
//     res.render('first-template');
// });

app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});