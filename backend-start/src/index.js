import 'dotenv/config';
import { createServer } from 'node:http';
import app from './app.js';
import connectDB from './db/index.js';

async function main() {
  try {
    await connectDB();
    const port = process.env.PORT || 8000;
    const server = createServer(app);
    server.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}
main();
