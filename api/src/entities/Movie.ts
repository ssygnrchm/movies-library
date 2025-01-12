import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { Review } from './Review';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 20 })
  type: string; // Movie or Series

  @Column({ length: 20 })
  status: string; // Want to Watch, Currently Watching, Watched, Dropped

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.movies, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  constructor(id:string, title: string, type: string, status: string, user: User, reviews: Review[]) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.status = status;
    this.user = user;
    this.createdAt = new Date();
    this.reviews = reviews;
  }
}
