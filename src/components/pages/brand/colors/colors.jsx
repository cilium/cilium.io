import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ColorMap from './color-map';

const logoColors = [
  { color: '#141A1F', hex: '141A1F', rgb: '20,26,31', hsl: '210,20,10' },
  { color: '#6B91C7', hex: '6B91C7', rgb: '107,145,199', hsl: '215,45,65' },
  { color: '#795AA5', hex: '795AA5', rgb: '121,90,165', hsl: '265,30,50' },
  { color: '#E83030', hex: 'E83030', rgb: '232,48,48', hsl: '360,80,55' },
  { color: '#F17423', hex: 'F17423', rgb: '241,116,35', hsl: '24,88,54' },
  { color: '#F9C31F', hex: 'F9C31F', rgb: '249,195,31', hsl: '45,95,55' },
  { color: '#97C639', hex: '97C639', rgb: '151,198,57', hsl: '80,55,50' },
  { color: '#C9DB70', hex: 'C9DB70', rgb: '201,219,112', hsl: '70,60,65' },
];

const websiteColors = [
  { color: '#0073E5', hex: '0073E5', rgb: '0,115,229', hsl: '210,100,45' },
  { color: '#EB4748', hex: 'EB4748', rgb: '235,71,72', hsl: '360,80,60' },
  { color: '#00877C', hex: '00877C', rgb: '0,135,124', hsl: '175,100,26' },
  { color: '#FFBF00', hex: 'FFBF00', rgb: '255,191,0', hsl: '45,100,50' },
  { color: '#D6EBFF', hex: 'D6EBFF', rgb: '214,235,255', hsl: '210,100,92' },
  { color: '#FBDADA', hex: 'FBDADA', rgb: '251,218,218', hsl: '360,80,92' },
  { color: '#D6FFFC', hex: 'D6FFFC', rgb: '214,255,252', hsl: '176,100,92' },
  { color: '#FFF5D6', hex: 'FFF5D6', rgb: '255,245,214', hsl: '45,100,92' },
  { color: '#141A1F', hex: '141A1F', rgb: '20,26,31', hsl: '210,20,10' },
  { color: '#6C7993', hex: '6C7993', rgb: '108,121,147', hsl: '220,15,50' },
  { color: '#A7B1BE', hex: 'A7B1BE', rgb: '167,177,190', hsl: '215,15,70' },
  { color: '#D1D7E0', hex: 'D1D7E0', rgb: '209,215,224', hsl: '215,20,85' },
  { color: '#E0E5EB', hex: 'E0E5EB', rgb: '224,229,235', hsl: '215,20,90' },
  { color: '#F0F2F4', hex: 'F0F2F4', rgb: '240,242,244', hsl: '215,15,95' },
  { color: '#F6F7F8', hex: 'F6F7F8', rgb: '246,247,248', hsl: '215,15,97' },
];

const Colors = () => (
  <section className="relative mt-10 bg-white md:mt-20 lg:mt-28 xl:mt-48">
    <Container>
      <div className="flex flex-col items-start space-y-10 border-b border-gray-3 pb-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col space-y-2.5">
          <Heading tag="h2" size="md">
            Cilium Colors
          </Heading>
          <p className="flat-breaks lg:flat-none xl:flat-breaks max-w-[800px]">
            You can use the colors of the website to create partner materials. <br /> Please note
            that the colors for the logo are highlighted separately.
          </p>
        </div>
        <Button to="/" className="w-full !px-7 md:w-auto lg:self-end" theme="primary-1">
          Download Brand Guide
        </Button>
      </div>
      <div className="mt-10">
        <Heading tag="h3" theme="gray" size="3xs">
          Logo colors
        </Heading>
        <ColorMap colors={logoColors} />
      </div>
      <div className="mt-12">
        <Heading tag="h3" theme="gray" size="3xs">
          Website colors
        </Heading>
        <ColorMap colors={websiteColors} />
      </div>
    </Container>
  </section>
);

export default Colors;
