export interface Message {
  message: string;
}

export const greeting: Message = { message: 'Welcome to api!' };

export interface Post {
  title: string;
  content: { text1: string, text2: string, text3: string };
  date: string;
}

export const firstPost: Post = { 
  title: "Hello there! today is ",
  content: { 
    text1: "Walking down the river shore I saw a lady in white, wearing magnificent clothes.",
    text2: "Her cheeks looked purple, her eyes where black holes, but of fine beaty her features were.", 
    text3: "I leaned in closer to take a look, wretched lady, she took my money and left me with the roots." },
  date: "30th of July of 2020" };