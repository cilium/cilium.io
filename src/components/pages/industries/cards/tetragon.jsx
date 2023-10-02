import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const TetragonCard = ({ className, contents }) => (
  <div>
    <Container className={className}>
      <div className="flex flex-col gap-10 lg:flex lg:flex-row">
        {contents.map(({ title, text, icon: Icon }, index) => (
          <div key={index} className="rounded  bg-white px-10 py-8 shadow-lg">
            <Icon className="mx-auto mb-4 h-14 w-14" />
            <h3 className="py-5 font-bold">{title}</h3>
            <p className="pb-6">{text}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

TetragonCard.propTypes = {
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

export default TetragonCard;
