import Counter from './components/Counter';
import MessageLoader from './components/MessageLoader';

export default function Home() {
  return (
    <main>
      <h1>Welcome</h1>
      <p>This is my first Next.js app.</p>
      <Counter />
      <MessageLoader />
    </main>
  );
}