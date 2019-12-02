import express from 'express';
import path from "path";
import ejs from 'ejs';

const app = express();
const router = express.Router();


app.set('/views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

router.get('/', (req, res) => {
	res.render("index");
});

router.get('/index.html', (req, res) => {
	res.render('index.html');
});


app.use(express.static(__dirname + "/lib"));
app.use(express.static(__dirname + '/views'));
app.use(router);
app.listen(8080, () => {
	console.log('App listening on port 8080');
	console.log('http://localhost:8080');
});