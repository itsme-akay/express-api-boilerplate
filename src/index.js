const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, NODE_ENV } = require('./config/env');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined'));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${NODE_ENV}]`);
});
