const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/backEnd/adminRoutes');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'assets')));

app.use('/administrator', adminRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
	console.log(
		`\n\n===============================\n Server Running on port : ${PORT}`
	)
);
