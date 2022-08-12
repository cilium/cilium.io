import PropTypes from 'prop-types';
import React from 'react';

const ColorMap = ({ colors }) => (
  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
    {colors.map(({ color, hex, rgb, hsl }, index) => (
      <div className="flex items-center space-x-5 rounded-lg border border-gray-6 p-7" key={index}>
        <div style={{ background: `${color}` }} className="h-[72px] w-[72px] rounded" />
        <div className="flex flex-col space-y-2.5 text-sm leading-none">
          <span>
            <strong>HEX -</strong> {hex}
          </span>
          <span>
            <strong>RGB -</strong> {rgb}
          </span>
          <span>
            <strong>HSL -</strong> {hsl}
          </span>
        </div>
      </div>
    ))}
  </div>
);

ColorMap.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      hex: PropTypes.string,
      hsl: PropTypes.string,
      rgb: PropTypes.string,
    })
  ).isRequired,
};

export default ColorMap;
