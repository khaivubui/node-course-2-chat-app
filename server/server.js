const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

// because of express.static, you don't need to set up get '/'
// app.get('/', (req, res) => {
//   res.render('index.html');
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
