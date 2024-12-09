'use client';

import { useEffect } from 'react';

const SoccerWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Scorebat embed script
    const script = document.createElement('script');
    script.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
    script.id = 'scorebat-jssdk';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.getElementById('scorebat-jssdk');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://www.scorebat.com/embed/matchview/1542724/?token=MTg5NzMxXzE3MzM3NjkzMTJfNGZiNGJmNTI2NDc2ODViZmQyYmVjODljMmRlODFmODdiMWI3NGU3ZQ=="
        frameBorder="0"
        width="600"
        height="760"
        allowFullScreen
        allow="autoplay; fullscreen"
        style={{
          width: '100%',
          height: '760px',
          overflow: 'hidden',
          display: 'block',
        }}
        className="_scorebatEmbeddedPlayer_"
      ></iframe>
    </div>
  );
};

export default SoccerWidget;
