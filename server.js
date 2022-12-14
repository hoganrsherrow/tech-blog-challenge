const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');



const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helpers.js');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Add in some middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// pass controllers to Express
app.use(require('./controllers/'));

// start up the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});