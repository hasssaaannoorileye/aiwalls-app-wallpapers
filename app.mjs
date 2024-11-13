import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { readdirSync } from 'fs';
import dotenv from 'dotenv';  // Import dotenv explicitly
import path from 'path'; // Import path to work with file paths
import { fileURLToPath } from 'url'; // Import fileURLToPath to convert URL to path
import wallpapersRouter from './routes/wallpapers.mjs'; // Adjust path if different

dotenv.config();  // Initialize dotenv to load environment variables

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));  // Use the default bodyParser

// Get the directory name from the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/wallpapers', wallpapersRouter); // Ensure this path matches your route

// Dynamically import all route files
const routesDir = path.join(__dirname, 'routes');
readdirSync(routesDir).forEach((file) => {
  const filePath = path.join(routesDir, file);
  const fileUrl = `file://${filePath.replace(/\\/g, '/')}`; // Convert to file:// URL

  import(fileUrl).then(routeModule => {
    app.use("/", routeModule.default);  // Assuming your route files export a default function or object
  }).catch(err => {
    console.error(`Error loading route ${file}: ${err.message}`);
  });
});

// Basic Route
app.get('/', (req, res) => {
    res.send("Hello, welcome to the Wallpapers API!");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

export default app;
