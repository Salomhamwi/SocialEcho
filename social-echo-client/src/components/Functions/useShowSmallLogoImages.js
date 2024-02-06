import { useState, useEffect, useCallback } from 'react';

const useShowSmallLogoImages = () => {
  const [smallLogoImages, setSmallLogoImages] = useState([]);

  const showSmallLogoImages = useCallback(() => {
    const logos = Array.from({ length: 30 }, (_, index) => ({
      id: index,
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
    }));

    logos.forEach((logo, index) => {
      setTimeout(() => {
        setSmallLogoImages((prevLogos) => [...prevLogos, logo]);
      }, index * 100);
    });
  }, [setSmallLogoImages]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      showSmallLogoImages();
    }, 1000);

    return () => {
      setSmallLogoImages([]);
      clearTimeout(timeout);
    };
  }, [showSmallLogoImages]);

  return smallLogoImages;
};

export default useShowSmallLogoImages;
