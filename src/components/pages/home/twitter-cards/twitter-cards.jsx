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

const TwitterCards = ({ title }) => (
  <section className="mt-10 md:mt-20 lg:mt-32">
    <Container>
      {title && (
        <Heading tag="h3" className="text-center">
          {title}
        </Heading>
      )}
      <div className="mt-16 grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 ">
        {items.map(({ text, name }, index) => (
          <div
            className="flex flex-col p-6 leading-relaxed border rounded-lg md:text-lg md:p-8 border-gray-3"
            key={index}
          >
            <TwitterIcon className="w-16 h-16" />
            <p
              className="my-3 md:my-5 with-link-primary-light"
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
  title: PropTypes.string,
};

TwitterCards.defaultProps = {
  title: null,
};

export default TwitterCards;
