import { scrollingMessages } from "@/config/scrolling-messages";

export default function Home() {
  return (
    <div className="scrolling-container">
      {scrollingMessages.map((message) => (
        <div 
          key={message.id}
          className="scrolling-text"
          style={{
            animationDuration: message.animationDuration,
            fontSize: message.fontSize,
            color: message.color,
            animationDelay: message.delay || "0s",
          }}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}
