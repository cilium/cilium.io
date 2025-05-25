import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { sanitize } from 'utils/sanitize-html';

const BlogAuthor = ({ header, bio, theme }) => {
  const isPrimary = theme === 'primary';
  return (
    <div
      className={classNames(
        isPrimary
          ? 'mt-8 flex flex-col border-t border-gray-3 pt-8 md:flex-row md:space-x-20 lg:space-x-28 xl:space-x-40'
          : 'rounded-lg border border-gray-3 bg-gray-4 p-6 md:p-8'
      )}
    >
      <div className={classNames(isPrimary ? 'shrink-0' : 'inline')}>
        <span
          className={classNames(
            isPrimary ? 'block text-lg md:text-xl lg:text-2xl' : 'pr-1',
            'font-bold'
          )}
          dangerouslySetInnerHTML={{ __html: sanitize(header) }}
        />
        {isPrimary && (
          <span className="mt-1 block leading-none text-gray-1 lg:text-lg">Author</span>
        )}
      </div>
      <span
        className={classNames(
          isPrimary ? 'my-6 text-lg leading-normal md:!mt-0 lg:text-xl lg:leading-normal' : 'inline'
        )}
        dangerouslySetInnerHTML={{ __html: sanitize(bio) }}
      />
    </div>
  );
};

BlogAuthor.propTypes = {
  header: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary']),
};

BlogAuthor.defaultProps = {
  theme: 'primary',
};

export default BlogAuthor;
