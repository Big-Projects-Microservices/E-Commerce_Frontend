import { useState, useEffect } from "react";

export function useProductImage(images) {
  const [activeImg, setActiveImg] = useState(null);
  const [isMainImageBroken, setIsMainImageBroken] = useState(false);
  const [brokenThumbnails, setBrokenThumbnails] = useState({});

  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImg(images[0]);
      setIsMainImageBroken(false);
      setBrokenThumbnails({});
    } else {
      setActiveImg(null);
    }
  }, [images]);

  const selectImage = (img) => {
    setActiveImg(img);
    setIsMainImageBroken(false);
  };

  const markMainImageAsBroken = () => {
    setIsMainImageBroken(true);
  };

  const markThumbnailAsBroken = (index) => {
    setBrokenThumbnails((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return {
    activeImg,
    isMainImageBroken,
    brokenThumbnails,
    selectImage,
    markMainImageAsBroken,
    markThumbnailAsBroken,
    hasImages: images && images.length > 0,
  };
}