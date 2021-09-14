import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import GuideSvg from './images/guide.inline.svg';
import InstallFestSvg from './images/installfest.inline.svg';

const icons = {
  guide: GuideSvg,
  installFest: InstallFestSvg,
};

const TryCilium = ({ title, items }) => (
  <section className="pt-16 pb-20 mt-20 lg:pt-24 lg:mt-28 lg:pb-28 bg-gray-4">
    <Container>
      <Heading tag="h2">{title}</Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-14">
        {items.map(({ iconName, name, text, buttonUrl, buttonText, buttonTarget }, index) => {
          const Icon = icons[iconName];
          return (
            <div className="flex flex-col bg-white border rounded-lg border-gray-3" key={index}>
              <Icon className="w-full h-auto" />
              <div className="flex flex-col items-center px-8 pt-6 pb-11 ">
                <Heading className="!leading-normal text-center" size="sm" tag="h3">
                  {name}
                </Heading>
                <p className="text-lg text-center mt-2.5">{text}</p>
                <Button
                  className="mt-5"
                  target={buttonTarget || ''}
                  to={buttonUrl}
                  disabled={buttonUrl === ''}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

TryCilium.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonTarget: PropTypes.string,
    })
  ).isRequired,
};

export default TryCilium;
