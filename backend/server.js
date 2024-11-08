var con=require('./conn');
var express=require('express');
var http=require('http');
const path = require('path');
const bodyparser=require('body-parser')
const ejs=require('ejs');
const bcrypt=require('bcryptjs');
const session=require('express-session');
// const bcrypt = require('bcryptjs');
// const cors = require("cors");
// const { response } = require('express');


var app=express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('views','./views')
app.set('view engine','ejs')


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Change to true if using HTTPS
}));
app.use((req, res, next) => {
  res.locals.loggedin = req.session.loggedin;
  res.locals.username = req.session.username;
  next();
});

// for the login /
app.get('/', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

app.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    con.query('SELECT * FROM users WHERE USERNAME = ?', [username], (error, results, fields) => {
      if (results.length > 0) {
          if (password==results[0].USER_PASS) {
            req.session.loggedin = true;
            req.session.username = username;
            console.log(req.session.username+" in login page")
            res.redirect('/home');
          } else {
            res.send('password doesnt match');
          } 
      } else {
        res.send('Incorrect Username and/or Password!');
      }
    });
  } else {
    res.send('Please enter Username and Password!');
  }
});


app.get('/logout', (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      // Redirect the user to the login page or any other appropriate page
      res.redirect('/');
    }
  });
});
  // for home

  // app.get('/home',(req,res)=>{
  //   res.sendFile('index.html',{root:__dirname});
  // })
app.get('/home', (req, res) => {
    if (req.session.loggedin) {
  res.sendFile('index.html',{root:__dirname})
  console.log("im the home session"+req.session.username)
    }
    else {
      res.redirect('/');
    }
});


// for the signup
app.get('/signup', (req, res) => {
  res.sendFile('signup.html', { root: './views' });});

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const name = req.body.fullname;
    const email = req.body.email;
    const password = req.body.pass;
    const cpass = req.body.confirm_pass;
    const role = req.body.role;

    if (password === cpass) {
            var sql1 ="INSERT INTO `users` (`USERNAME`, `FULLNAME`, `EMAIL`, `USER_PASS`, `ROLE`) VALUES (?,?,?,?,?);"
                con.query(sql1,
                    [username, name, email, cpass, role],
                    (err, result) => {
                        if (err) {
                            console.error('Error inserting user:', err.message);
                            res.status(500).send('Error inserting user');
                        } else {
                            console.log("Value inserted successfully");
                            res.redirect('/');
                        }
                    }
                );
    } else {
        res.status(400).send('Passwords do not match');
    }
});




const port = 8006;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});