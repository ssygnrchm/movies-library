import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from './User';
import { Movie } from './Movie';

@Entity()
@Unique(['movie', 'user']) // Constraint untuk memastikan satu user hanya bisa memberikan satu review per movie
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  review: string;

  @Column({ type: 'int', width: 1 })
  rating: number; // Rating antara 1 hingga 5

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.reviews, { onDelete: 'CASCADE' })
  movie: Movie;

  constructor(id: string, review: string, rating: number, user: User, movie: Movie) {
    this.id = id;
    this.review = review;
    this.rating = rating;
    this.user = user;
    this.movie = movie;
    this.createdAt = new Date();
  }
}
