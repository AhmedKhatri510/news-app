import React, { useEffect, useState } from "react";
import {
  NoPhotoAvailable,
  NpaContainerVariant,
} from "../no-photo-available/NoPhotoAvailable";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: NpaContainerVariant;
}

const ImageWithFallback: React.FC<Props> = ({
  src,
  alt,
  variant,
  ...props
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (src) setError(false);
  }, [src]);

  if (error || !src) {
    return <NoPhotoAvailable variant={variant} />;
  }

  return <img src={src} alt={alt} onError={() => setError(true)} {...props} />;
};

export default ImageWithFallback;
