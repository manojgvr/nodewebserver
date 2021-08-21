const express = require('express');
const path = require('path');
const port = process.env.PORT ||  3000;

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'../public'));
const app = express();
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'../public')));
//

app.get("/help", ( req, res) => {
    res.send([{name: 'Manoj', age: 40},{name: 'Shru', age: 35}]);
 });

 /*app.get("/about", ( req, res) => { test
    res.send('About page test');
 });
*/

 app.get("/weather", ( req, res) => {
    res.send('YOur Weather page test');
 });
 
 app.get("/", ( req, res) => {
    res.render('index',{title: 'myapp' , name: 'Manoj'});
 }); 

 
app.listen(port, () => { console.log('Server started on '+ port)});
