// app/page.tsx
import Head from "next/head";
import VideoPlayer from "./components/VideoPlayer"; // Correct relative path

const Home = () => {
  const videoSrc =
    "https://obevcimanyd179569584.akainu.xyz/lSV1SsnhcJjO5bLHfJmexA/Fv2lucGIbhPi2caWYvF5Lg/1733881323291/live/hawHD/playlist.m3u8";

  return (
    <>
      <Head>
        <title>Livestream App</title>
        <meta name="description" content="A simple livestream app built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Livestream Video</h1>
        <VideoPlayer src={videoSrc} />
      </main>
    </>
  );
};

export default Home;
