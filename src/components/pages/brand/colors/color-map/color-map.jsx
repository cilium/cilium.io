import PropTypes from 'prop-types';
import React from 'react';

const ColorMap = ({ className = undefined, title, colors }) => (
  <div className={className}>
    <h3 className="font-bold uppercase leading-none tracking-wide text-gray-1">{title}</h3>
    <ul className="mt-6 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      {colors.map(({ color, hex, rgb, hsl, cmyk }, index) => (
        <li
          className="flex items-center gap-x-5 rounded-lg border-2 border-gray-6 py-5 pl-5 pr-3 leading-none xs:flex-col xs:gap-x-0 xs:gap-y-5 sm:flex-row sm:gap-y-0 sm:gap-x-5 sm:py-[26px] sm:pl-7"
          key={index}
        >
          <div style={{ background: `${color}` }} className="h-[72px] w-[72px] shrink-0 rounded" />
          <div className="flex flex-col gap-y-2.5 text-sm leading-none">
            <span className="tracking-wider">
              <strong className="tracking-wide">HEX -</strong> {hex}
            </span>
            <span className="tracking-wider">
              <strong className="tracking-wide">RGB -</strong> {rgb}
            </span>
            {hsl && (
              <span className="tracking-wider">
                <strong className="tracking-wide">HSL -</strong> {hsl}
              </span>
            )}
            {cmyk && (
              <span className="tracking-wider">
                <strong className="tracking-wide">CMYK -</strong> {cmyk}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

ColorMap.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      hex: PropTypes.string,
      hsl: PropTypes.string,
      rgb: PropTypes.string,
      cmyk: PropTypes.string,
    })
  ).isRequired,
};

export default ColorMap;
