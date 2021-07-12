import express from 'express';
import router from './lib/router';

const { PORT = 3001 } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// All other requests could be used for static files, images, etc.
app.get('*', (_req, res) => {
  res.send('<h1>Welcome to the server</h1>');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
