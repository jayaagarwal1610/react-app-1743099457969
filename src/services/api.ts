import { Question, Category, User } from '../types';

// Mock data to simulate API responses
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    reputation: 1250
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?img=5',
    reputation: 950
  },
  {
    id: '3',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=8',
    reputation: 2340
  }
];

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    icon: '💻',
    color: '#3b82f6',
    questionCount: 2345
  },
  {
    id: '2',
    name: 'Science',
    icon: '🔬',
    color: '#10b981',
    questionCount: 1204
  },
  {
    id: '3',
    name: 'Mathematics',
    icon: '🧮',
    color: '#f59e0b',
    questionCount: 897
  },
  {
    id: '4',
    name: 'Health',
    icon: '🏥',
    color: '#ef4444',
    questionCount: 765
  },
  {
    id: '5',
    name: 'History',
    icon: '📜',
    color: '#8b5cf6',
    questionCount: 543
  },
  {
    id: '6',
    name: 'Arts',
    icon: '🎨',
    color: '#ec4899',
    questionCount: 432
  }
];

const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How do I create a responsive layout with CSS Grid?',
    content: 'I\'m trying to create a responsive grid layout that adjusts based on screen size. I\'ve tried using media queries but I\'m having trouble with the implementation. Any suggestions?',
    tags: ['css', 'web-development', 'responsive-design'],
    createdAt: '2023-09-10T14:48:00Z',
    updatedAt: '2023-09-10T14:48:00Z',
    upvotes: 24,
    downvotes: 2,
    commentCount: 7,
    viewCount: 142,
    author: mockUsers[0],
    status: 'open'
  },
  {
    id: '2',
    title: 'What\'s the difference between useState and useReducer in React?',
    content: 'I\'m learning React hooks and I\'m confused about when to use useState versus useReducer. Can someone explain the key differences and use cases?',
    tags: ['javascript', 'react', 'hooks'],
    createdAt: '2023-09-09T10:24:00Z',
    updatedAt: '2023-09-09T12:30:00Z',
    upvotes: 42,
    downvotes: 1,
    commentCount: 12,
    viewCount: 320,
    author: mockUsers[1],
    status: 'open'
  },
  {
    id: '3',
    title: 'How to optimize React component performance?',
    content: 'My React application is getting slow as it grows. What are the best practices for optimizing React component performance? I\'ve heard about memo and useMemo but I\'m not sure where to start.',
    tags: ['react', 'performance', 'optimization'],
    createdAt: '2023-09-08T09:15:00Z',
    updatedAt: '2023-09-08T09:15:00Z',
    upvotes: 37,
    downvotes: 0,
    commentCount: 15,
    viewCount: 278,
    author: mockUsers[2],
    status: 'resolved'
  },
  {
    id: '4',
    title: 'Best practices for handling async operations in React?',
    content: 'I\'m building a React app that needs to fetch data from an API. What are the best practices for handling asynchronous operations? Should I use async/await, promises, or something else?',
    tags: ['react', 'javascript', 'async'],
    createdAt: '2023-09-07T16:42:00Z',
    updatedAt: '2023-09-07T18:12:00Z',
    upvotes: 18,
    downvotes: 3,
    commentCount: 9,
    viewCount: 156,
    author: mockUsers[0],
    status: 'open'
  }
];

// API service functions
export const getQuestions = async (): Promise<Question[]> => {
  // Simulating API delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockQuestions);
    }, 500);
  });
};

export const getCategories = async (): Promise<Category[]> => {
  // Simulating API delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 300);
  });
};

export const getFeaturedQuestion = async (): Promise<Question> => {
  // Simulating API delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockQuestions[0]);
    }, 200);
  });
};

export const searchQuestions = async (query: string): Promise<Question[]> => {
  // Simulating API delay and search logic
  return new Promise(resolve => {
    setTimeout(() => {
      const filtered = mockQuestions.filter(q => 
        q.title.toLowerCase().includes(query.toLowerCase()) || 
        q.content.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });
};