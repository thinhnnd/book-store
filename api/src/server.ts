import 'reflect-metadata';
import App from './app';

// Đọc từ .env
// reflect-metadata?
const app = new App(5000);

app.start();
