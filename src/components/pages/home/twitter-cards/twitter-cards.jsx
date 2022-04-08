import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import TwitterIcon from 'icons/twitter-inverse.inline.svg';

const items = [
  {
    text: 'Cilium and the team around it have impressed me from the beginning. My mind is spinning with the possibilities of eBPF.',
    name: 'Tim Hockin (@thockin), co-founder Kubernetes, Google',
  },
  {
    text: `If you're not getting with <a href="https://twitter.com/hashtag/ebpf?src=hashtag_click" target="_blank" rel="noopener noreferrer">#ebpf</a> and <a href="https://twitter.com/hashtag/cilium?src=hashtag_click" target="_blank" rel="noopener noreferrer">#cilium</a> you really don't know what you're doing.`,
    name: 'Tony Lambiris (@thelambeers), Capital One',
  },
];

const TwitterCards = ({ title, className }) => (
  <section className={classNames('mt-10 md:mt-20 lg:mt-32', className)}>
    <Container>
      {title && (
        <Heading tag="h3" className="text-center">
          {title}
        </Heading>
      )}
      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-6 lg:mt-16 lg:gap-8 ">
        {items.map(({ text, name }, index) => (
          <div
            className="flex flex-col rounded-lg border border-gray-3 p-6 leading-relaxed md:p-8 md:text-lg"
            key={index}
          >
            <TwitterIcon className="h-16 w-16" />
            <p
              className="with-link-primary-light my-3 md:my-5"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <span className="mt-auto font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

TwitterCards.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

TwitterCards.defaultProps = {
  className: null,
  title: null,
};

export default TwitterCards;
