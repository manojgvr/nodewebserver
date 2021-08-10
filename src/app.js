const express = require('express');
const path = require('path');


console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'../public'));
const app = express();
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'../public')));


app.get("/help", ( req, res) => {
    res.send([{name: 'Manoj', age: 40},{name: 'Shru', age: 35}]);
 });

 /*app.get("/about", ( req, res) => {
    res.send('About page test');
 });
*/

 app.get("/weather", ( req, res) => {
    res.send('YOur Weather page test');
 });
 
 app.get("/", ( req, res) => {
    res.render('index',{title: 'myapp' , name: 'Manoj'});
 });

 
app.listen(3000, () => { console.log('Server started on 3000')});
