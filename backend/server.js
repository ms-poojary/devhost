
const con = require('./conn');

var express=require('express');
// var http=require('http');
// const path = require('path');
// const bodyparser=require('body-parser')
// // const ejs=require('ejs');
// const bcrypt=require('bcryptjs');
const session=require('express-session');
// // const bcrypt = require('bcryptjs');
// // const cors = require("cors");
// // const { response } = require('express');


var app=express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

// app.set('views','./views')
// app.set('view engine','ejs')


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
// app.get('/', (req, res) => {
//   res.send("hello")
// });
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
      con.query('SELECT * FROM users WHERE email = ?', [email], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
            if (password == results[0].pass) {
              req.session.loggedin = true;
              req.session.email = email;
              res.json({ success: true, message: 'Login successful!' });
            } else {
              res.json({ success: false, message: 'Password does not match' });
            }
        } else {
          res.json({ success: false, message: 'Incorrect Username and/or Password!' });
        }
      });
     
  });
  
  


// app.get('/logout', (req, res) => {
//   // Destroy the session to log the user out
//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // Redirect the user to the login page or any other appropriate page
//       res.redirect('/');
//     }
//   });
// });
//   // for home

//   // app.get('/home',(req,res)=>{
//   //   res.sendFile('index.html',{root:__dirname});
//   // })
// app.get('/home', (req, res) => {
//     if (req.session.loggedin) {
//   res.sendFile('index.html',{root:__dirname})
//   console.log("im the home session"+req.session.username)
//     }
//     else {
//       res.redirect('/');
//     }
// });
app.get("/hell", (req, res) => {
  // res.sendFile('signup.html', { root: './views' });
  res.send("saav mare")
});

app.get('/', (req, res) => {
  res.send("hello")
});


// for the signup
app.get("/signup", (req, res) => {
  // res.sendFile('signup.html', { root: './views' });
  res.send("saav mare")
});

app.post("/signup", (req, res) => {
    const { username, email, confirmPassword } = req.body;

    if (confirmPassword) {
        var sql1 = "INSERT INTO `users` (`username`, `email`, `pass`) VALUES (?,?,?);";
        con.query(sql1, [username, email, confirmPassword], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err.message);
                return res.status(500).json({ message: 'Error inserting user' }); // Changed to JSON
            }
            console.log("Value inserted successfully");
            res.status(200).json({ message: 'User registered successfully' }); // Changed to JSON
        });
    } else {
        res.status(400).json({ message: 'Passwords do not match' }); // Changed to JSON
    }
});



app.post('/add-Reminders', (req, res) => {
    const { title, description, date, time } = req.body;
  
    con.query('INSERT INTO reminder (title, description, date, time) VALUES (?, ?, ?, ?)',
      [title, description, date, time],
      (err, result) => {
        if (err) {
          console.error('Error inserting reminder:', err);
          return res.status(500).json({ message: 'Error inserting reminder: ' + err.message });
        }
        console.log("Reminder inserted successfully");
        res.status(201).json({ message: 'Reminder added successfully' });
      }
    );
  });

  app.get('/get-reminders', (req, res) => {
    con.query('SELECT * FROM reminder', (err, results) => {
      if (err) {
        console.error('Error fetching reminders:', err);
        return res.status(500).json({ error: 'Failed to fetch reminders' });
      }
      res.json(results);
    });
  });


app.post("/dgdf", (req, res) => {
    const username = req.body.username;
    // const name = req.body.fullname;
    const email = req.body.email;
    // const password = req.body.pass;
    const cpass = req.body.confirm_pass;
    // const role = req.body.role;
    console.log("req.body",req.body,username)

    if (password === cpass) {
            // var sql1 ="INSERT INTO `users` (`USERNAME`, `FULLNAME`, `EMAIL`, `USER_PASS`, `ROLE`) VALUES (?,?,?,?,?);"
            var sql1 ="INSERT INTO `users` (`username`, `email`, `pass` ) VALUES (?,?,?);"
   
            con.query(sql1,
                    [username, email, cpass],
                    (err, result) => {
                        if (err) {
                            console.error('Error inserting user:', err.message);
                            res.status(500).send('Error inserting user');
                        } else {
                            console.log("Value inserted successfully");
                            // res.redirect('/');
                        }
                    }
                );
    } else {
        res.status(400).send('Passwords do not match');
    }
});




const port = 8088;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});