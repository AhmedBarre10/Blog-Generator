const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
jsonParser = bodyParser.json();
const auth = require('./middleware/auth');


connectDB();
app.use(express.json());

app.use('/users', jsonParser, require('./routes/users'));
app.use('/auth', jsonParser, require('./routes/auth'));
app.use('/blog', jsonParser, require('./routes/blog.js'));
app.use('/logout', jsonParser, require('./routes/logout.js'));


app.use('/welcome', jsonParser, require('./routes/Welcome'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  

app.get('/',(req,res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));