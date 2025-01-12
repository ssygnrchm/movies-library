import express, { Application, Request, Response } from 'express';
import { AppDataSource } from './data-source';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route dasar
app.get('/', (req: Request, res: Response) => {
    try {
        res.json({ msg: 'Welcome to Movies Library API!' });
    } catch (x) {
        console.error(x);
        res.json({ error: x });
    }
});

// Database Connection
AppDataSource.initialize()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})