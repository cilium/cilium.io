import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes, { number } from 'prop-types';
import React, { Fragment } from 'react';
import { PopupButton } from 'react-calendly';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const buttonThemesClassNames = {
  'primary-1':
    'text-white bg-primary-1 hover:bg-hover-1 disabled:opacity-25 border-2 border-primary-1 disabled:hover:bg-primary-1 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-2 outline-none',
  'outline-gray-dark': 'border-2 border-gray-3 hover:text-primary-1',
};

const buttonIconClassNames = {
  base: 'relative !pl-11 lg:!pl-14 after:absolute after:w-[22px] after:h-[22px] after:left-3.5 lg:after:left-6 after:top-1/2 after:-translate-y-1/2',
  eu: 'after:bg-eu',
  usa: 'after:bg-usa',
};

const CardItem = ({ imageData, svgData, name, text, buttons, size }) => {
  const isSmallSize = size === 'sm';
  return (
    <li className="flex flex-col rounded-xl shadow-card">
      {imageData ? (
        <div className="relative self-center">
          <img
            src={imageData.imageSrc}
            alt=""
            width={imageData.width}
            height={imageData.height}
            loading="lazy"
            aria-hidden
          />
          <div
            style={{
              width: `${Math.round((imageData.gatsbyImageWidth / imageData.width) * 100)}%`,
              height: 'auto',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <GatsbyImage image={getImage(imageData.gatsbyImage)} alt={name} loading="lazy" />
          </div>
        </div>
      ) : (
        <img
          className="self-center"
          src={svgData.imageSrc}
          width={svgData.width}
          height={svgData.height}
          alt={name}
          loading="lazy"
        />
      )}
      <div
        className={classNames(
          'flex grow flex-col px-6 pb-8 text-center xl:px-8',
          isSmallSize ? '' : 'pt-4'
        )}
      >
        <Heading size={isSmallSize ? '2xs' : 'xs'} tag="h3" asHTML>
          {name}
        </Heading>
        <p
          className={classNames('mt-2.5 mb-5 lg:mb-7', isSmallSize ? 'text-base' : 'md:text-lg')}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div
          className={classNames(
            'mt-auto flex flex-col items-center justify-center space-y-3 xs:flex-row xs:space-y-0 xs:space-x-3 xl:space-x-5',
            isSmallSize
              ? 'lg:flex-col lg:space-x-0 lg:space-y-4 xl:flex-row xl:space-y-0'
              : 'md:flex-col md:space-x-0 md:space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4'
          )}
        >
          {buttons.map(({ title, url, target, theme, iconName, isPopup }, index) => (
            <Fragment key={index}>
              {isPopup ? (
                <PopupButton
                  url={url}
                  rootElement={document.querySelector('#___gatsby')}
                  className={classNames(
                    'inline-flex cursor-pointer justify-center whitespace-nowrap rounded text-base font-bold !leading-none transition-colors duration-200 disabled:cursor-auto',
                    isSmallSize
                      ? 'py-2.5 px-3.5 text-base'
                      : 'py-2.5 px-3.5 md:py-3 md:px-5 lg:py-4 lg:px-6 lg:text-lg',
                    buttonThemesClassNames[theme],
                    iconName && buttonIconClassNames.base,
                    iconName && buttonIconClassNames[iconName]
                  )}
                  text={title}
                />
              ) : (
                <Button
                  className="border-2"
                  to={url}
                  target={target || null}
                  rel={target ? 'noopener noreferrer' : null}
                  theme={theme}
                  size={size}
                >
                  {title}
                </Button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </li>
  );
};

CardItem.propTypes = {
  imageData: PropTypes.exact({
    width: PropTypes.number,
    height: PropTypes.number,
    imageSrc: PropTypes.string,
    gatsbyImage: PropTypes.object,
    gatsbyImageWidth: number,
  }),
  svgData: PropTypes.exact({
    imageSrc: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      buttonText: PropTypes.string,
      buttonUrl: PropTypes.string,
      buttonTarget: PropTypes.string,
      isPopup: PropTypes.bool,
    })
  ).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
};

CardItem.defaultProps = {
  imageData: null,
  svgData: null,
  size: 'md',
};

export default CardItem;
