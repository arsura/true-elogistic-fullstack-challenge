const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const path        = require('path');
const router      = require('./router');

const port  = process.env.SERVER_PORT || 8080;
const app   = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD, 'dist')));
  app.get('/*', function(_, res) {
    res.sendFile(path.join(process.env.PWD, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});