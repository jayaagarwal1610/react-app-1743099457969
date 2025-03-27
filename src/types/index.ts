export interface Question {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number;
  commentCount: number;
  viewCount: number;
  author: User;
  status: 'open' | 'closed' | 'resolved';
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  reputation: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  questionCount: number;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: User;
  upvotes: number;
}