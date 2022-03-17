import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

const RATIO = 2;

const SVGAndGatsbyImage = ({
  className,
  imageClassName,
  canvasClassName,
  gatsbyImageClassName,
  width,
  height,
  imageSrc,
  gatsbyImage,
  gatsbyImageX,
  gatsbyImageY,
  gatsbyImageWidth,
  gatsbyImageHeight,
  imageProps,
  gatsbyImageProps,
}) => {
  const canvasRef = useRef();
  const gastbyImageRef = useRef();

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isCanvasImageLoaded, setIsCanvasImageLoaded] = useState(false);

  const handleImageLoad = () => {
    if (!isImageLoaded) setIsImageLoaded(true);
  };

  const handleGatsbyImageLoad = () => {
    const canvas = canvasRef.current;
    const gatsbyImage = gastbyImageRef.current.querySelector('picture img');
    canvas.width = width * RATIO;
    canvas.height = height * RATIO;

    const context = canvas.getContext('2d');

    function drawImage() {
      const canvasImage = new Image();
      canvasImage.src = gatsbyImage.currentSrc;
      canvasImage.addEventListener(
        'load',
        () => {
          if (!isCanvasImageLoaded) setIsCanvasImageLoaded(true);
          setTimeout(() => {
            context.drawImage(
              canvasImage,
              gatsbyImageX * RATIO,
              gatsbyImageY * RATIO,
              gatsbyImageWidth * RATIO,
              gatsbyImageHeight * RATIO
            );
          }, 100);
        },
        { once: true }
      );
    }
    drawImage();
  };

  useEffect(() => {
    const verificationInterval = setInterval(() => {
      const img = gastbyImageRef.current.querySelector('picture img');
      // hack solution that gurantees triggering on image load, todo check it more
      if (img && img.currentSrc) {
        clearInterval(verificationInterval);
        if (img.complete) {
          handleGatsbyImageLoad();
        } else {
          img.addEventListener('load', handleGatsbyImageLoad, { once: true });
        }
      }
    }, 100);
    return () => {
      clearInterval(verificationInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classNames(
        'pointer-events-none relative opacity-0 transition-opacity duration-500 ease-linear',
        isImageLoaded && isCanvasImageLoaded && 'opacity-100',
        className
      )}
      aria-hidden
    >
      <img
        className={imageClassName}
        width={width}
        height={height}
        src={imageSrc}
        loading="lazy"
        alt=""
        ref={(img) => {
          if (img?.complete && !isImageLoaded) setIsImageLoaded(true);
        }}
        onLoad={handleImageLoad}
        {...imageProps}
      />
      <canvas
        className={classNames('absolute top-0 left-0 h-full w-full', canvasClassName)}
        ref={canvasRef}
      />
      <div ref={gastbyImageRef}>
        <GatsbyImage
          className={classNames('!absolute opacity-0', gatsbyImageClassName)}
          image={getImage(gatsbyImage)}
          loading="lazy"
          alt=""
          {...gatsbyImageProps}
        />
      </div>
    </div>
  );
};

SVGAndGatsbyImage.propTypes = {
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  canvasClassName: PropTypes.string,
  gatsbyImageClassName: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  gatsbyImage: PropTypes.object.isRequired,
  gatsbyImageX: PropTypes.number.isRequired,
  gatsbyImageY: PropTypes.number.isRequired,
  gatsbyImageWidth: PropTypes.number.isRequired,
  gatsbyImageHeight: PropTypes.number.isRequired,
  imageProps: PropTypes.object,
  gatsbyImageProps: PropTypes.object,
};

SVGAndGatsbyImage.defaultProps = {
  className: null,
  imageClassName: null,
  canvasClassName: null,
  gatsbyImageClassName: null,
  imageProps: null,
  gatsbyImageProps: null,
};

export default SVGAndGatsbyImage;
