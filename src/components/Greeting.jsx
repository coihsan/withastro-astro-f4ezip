import { useState } from 'preact/hooks';

export default function Greeting({messages, text}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3><span className='text-lime-400 underline'>{greeting}!</span>{text}</h3>
    </div>
  );
}