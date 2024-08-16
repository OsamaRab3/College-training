
const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
const hostname = 'localhost';

// Serve static files (CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'home.html'),(err)=>{

    if (err) {
      console.error('Error sending file:', err);
      res.status(err.status).end();
    }
  })
});

// Route for the submit messages page
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'submit_message.html'),(err)=>{
    if(err){
      console.error('Error sending file:', err);
      res.status(err.status).end();
    }
  });
});

// Route for the view messages page
app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname ,'public', 'view_messages.html'),(err)=>{
    if (err){
      console.error('Error sending file:', err);
      res.status(err.status).end();
    }
  });
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server and listen on the specified port and hostname
app.listen(port, hostname, () => {
  console.log(`Messaging Website app listening on http://${hostname}:${port}/`);
});

