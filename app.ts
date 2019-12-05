import express from 'express';
import Bundler from 'parcel-bundler';
import path from 'path';
import ejs from 'ejs';

const file = './src/views/index.html';
const options: Bundler.ParcelOptions = {
	cache: false,
	bundleNodeModules: true,
	target: 'node',
	publicUrl: '/',
	sourceMaps: true,
	watch: true
}

const app = express();
const router = express.Router();
const bundler = new Bundler(file, options);

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

router.get("/", (req, res) => {
	res.redirect('/index.html')
});

app.use(express.static(__dirname + "/lib"));
app.use(express.static(__dirname + "/index.html"));
app.use(router);
app.use(bundler.middleware());
app.listen(8080, () => {
	console.log('App listening on port 8080');
	console.log('http://localhost:8080');
});
