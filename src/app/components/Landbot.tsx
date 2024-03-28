import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new window.Landbot.Container({
        container: '#myLandbot',
        configUrl: 'https://storage.googleapis.com/landbot.pro/v3/H-2170503-FO76PWGGOCS59I0T/index.json',
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="myLandbot" style={{ width: '100%', height: '500px' }} />;
};

export default MyComponent;
