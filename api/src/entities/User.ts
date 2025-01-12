import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Movie } from './Movie';
import { Review } from './Review';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 50 })
  nickname: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => Movie, (movie) => movie.user)
  movies: Movie[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  constructor(
    id: string,
    fullName: string,
    nickname: string,
    email: string,
    password: string,
    movies: Movie[],
    reviews: Review[]
  ) {
    this.id = id;
    this.fullName = fullName;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.role = 'user';
    this.createdAt = new Date();
    this.movies = movies;
    this.reviews = reviews;
  }
}
