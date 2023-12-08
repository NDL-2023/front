import { User } from './user.model';

export interface Reply {
  id: number;
  content: string;
  author: User;
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  author: User;
  replies: Reply[];
}
