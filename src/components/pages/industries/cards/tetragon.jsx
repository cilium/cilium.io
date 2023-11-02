import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';
import EnforcementIcon from 'images/pages/industries/security/enforcement.inline.svg';
import ProcessIcon from 'images/pages/industries/security/process.inline.svg';
import RuntimeIcon from 'images/pages/industries/security/runtime.inline.svg';

const icons = {
  process: ProcessIcon,
  runtime: RuntimeIcon,
  enforcement: EnforcementIcon,
};

// eslint-disable-next-line import/prefer-default-export
export const TetragonCard = ({ heading, description, className, contents }) => (
  <Container className={className}>
    <Heading tag="h2" className="text-center">
      {heading}
    </Heading>
    <p className="mx-auto mt-3 block w-full text-center text-lg font-light lg:mt-4 lg:max-w-[694px]">
      {description}
    </p>
    <ul className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
      {contents.map(({ title, text, icon }, index) => {
        const Icon = icons[icon];
        return (
          <li key={index} className="flex flex-col rounded-xl bg-white px-6 py-8 shadow-primary">
            <Icon className="h-14 w-14" />
            <Heading className="mt-5 leading-tight" tag="h3" size="xs">
              {title}
            </Heading>
            <p className="mt-2.5 w-full">{text}</p>
          </li>
        );
      })}
    </ul>
  </Container>
);

TetragonCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TetragonCard.defaultProps = {
  className: '',
};
