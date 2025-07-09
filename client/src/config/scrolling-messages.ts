export interface ScrollingMessage {
  id: string;
  text: string;
  animationDuration: string;
  fontSize: string;
  color: string;
  delay?: string;
}

export const scrollingMessages: ScrollingMessage[] = [
  {
    id: "message1",
    text: "Can you see this?",
    animationDuration: "8s",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    color: "hsl(0, 0%, 0%)",
  },
  {
    id: "message2",
    text: "Here's another message!",
    animationDuration: "10s",
    fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)",
    color: "hsl(0, 0%, 20%)",
    delay: "4s",
  },
];