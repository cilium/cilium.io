import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading/heading';

const EmptyState = () => (
  <Container className="mt-20 mb-14 max-w-[500px]">
    <Heading size="xs" tag="h4" className="text-center">
      No events match your filters.
      <br />
      Try adjusting them for more results.
    </Heading>
  </Container>
);

export default EmptyState;
