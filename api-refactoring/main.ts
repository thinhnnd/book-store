import 'reflect-metadata';
import App from './app';

// Đọc từ .env
// reflect-metadata?
const app = new App(5000);

const startedStatus = app.start();

if(!startedStatus) {
    console.log(`App has failed to start. Please check log`);
}
