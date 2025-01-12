import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'angkatan12',
    database: 'movies_library_db',
    synchronize: true,
    logging: false,
    entities: ['./src/entities/**/*.ts'],
    migrations: ['./src/migrations/**/*.ts'],
    subscribers: ['./src/subscribers/**/*.ts'],
});