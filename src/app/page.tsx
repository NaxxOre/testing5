import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Soccer Widget</h1>
      <p>Click below to view the live soccer widget:</p>
      <Link href="/soccer" style={{ color: '#0070f3', textDecoration: 'underline' }}>
  Go to Soccer Widget
</Link>
<h1>hello world</h1>
      <p>this is elon musk</p>
    </main>
  );
};

export default Home;
