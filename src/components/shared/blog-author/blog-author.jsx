import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const BlogAuthor = ({ header, bio, theme }) => {
  const isPrimary = theme === 'primary';
  return (
    <div
      className={classNames(
        isPrimary
          ? 'flex flex-col pt-8 mt-8 border-t md:flex-row md:space-x-20 lg:space-x-28 xl:space-x-40 border-gray-3'
          : 'p-6 md:p-8 bg-gray-4 border border-gray-3 rounded-lg'
      )}
    >
      <div className={classNames(isPrimary ? 'flex-shrink-0' : 'inline')}>
        <span
          className={classNames(
            isPrimary ? 'block text-lg md:text-xl lg:text-2xl' : 'pr-1',
            'font-bold'
          )}
          dangerouslySetInnerHTML={{ __html: header }}
        />
        {isPrimary && (
          <span className="block mt-1 leading-none text-gray-1 lg:text-lg">Author</span>
        )}
      </div>
      <span
        className={classNames(
          isPrimary ? 'my-6 md:!my-0 text-lg leading-normal lg:text-xl lg:leading-normal' : 'inline'
        )}
        dangerouslySetInnerHTML={{ __html: bio }}
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
