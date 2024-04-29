/* eslint-disable react/prop-types */
import React from 'react';

import BrandFeatures from 'components/pages/brand/brand-features';
import Colors from 'components/pages/brand/colors';
import Hero from 'components/pages/brand/hero';
import LegalBox from 'components/pages/brand/legal-box';
import Logos from 'components/pages/brand/logos';
import Community from 'components/shared/community';
import SEO from 'components/shared/seo';
import MainLayout from 'layouts/main/main';
import { brand as seo } from 'utils/seo-metadata';

const ciliumColors = {
  logos: [
    { color: '#141A1F', hex: '141A1F', rgb: '20,26,31', hsl: '210,20,10' },
    { color: '#6B91C7', hex: '6B91C7', rgb: '107,145,199', hsl: '215,45,65' },
    { color: '#795AA5', hex: '795AA5', rgb: '121,90,165', hsl: '265,30,50' },
    { color: '#E83030', hex: 'E83030', rgb: '232,48,48', hsl: '360,80,55' },
    { color: '#F17423', hex: 'F17423', rgb: '241,116,35', hsl: '24,88,54' },
    { color: '#F9C31F', hex: 'F9C31F', rgb: '249,195,31', hsl: '45,95,55' },
    { color: '#97C639', hex: '97C639', rgb: '151,198,57', hsl: '80,55,50' },
    { color: '#C9DB70', hex: 'C9DB70', rgb: '201,219,112', hsl: '70,60,65' },
  ],
  website: [
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
  ],
};

const hubbleColors = {
  logos: [
    { color: '#333333', hex: '333333', rgb: '51,51,51', cmyk: '69,63,62,58' },
    { color: '#f8C519', hex: 'f8C519', rgb: '248,197,25', cmyk: '2,22,98,0' },
    { color: '#f07525', hex: 'f07525', rgb: '240,117,37', cmyk: '1,67,98,0' },
    { color: '#E8282B', hex: 'E8282B', rgb: '232,40,43', cmyk: '2,98,94,0' },
    { color: '#CBDD72', hex: 'CBDD72', rgb: '203,221,114', cmyk: '23,0,71,0' },
    { color: '#98CA3F', hex: '98CA3F', rgb: '152,202,63', cmyk: '46,0,98,0' },
    { color: '#6389C6', hex: '6389C6', rgb: '99,137,198', cmyk: '64,41,0,0' },
    { color: '#8162AA', hex: '8162AA', rgb: '129,98,170', cmyk: '56,70,0,0' },
    { color: '#FFFFFF', hex: 'FFFFFF', rgb: '255,255,255', cmyk: '0,0,0,0' },
  ],
};

const tetragonColors = {
  logos: [
    { color: '#333333', hex: '333333', rgb: '51,51,51', cmyk: '69,63,62,58' },
    { color: '#F3C018', hex: 'F3C018', rgb: '243,192,24', cmyk: '0,21,90,5' },
    { color: '#EB7525', hex: 'EB7525', rgb: '235,117,37', cmyk: '0,50,84,8' },
    { color: '#E3262B', hex: 'E3262B', rgb: '227,38,43', cmyk: '0,83,81,11' },
    { color: '#C6D872', hex: 'C6D872', rgb: '198,216,114', cmyk: '8,0,47,15' },
    { color: '#92C53F', hex: '92C53F', rgb: '146,197,63', cmyk: '26,0,68,23' },
    { color: '#6284C1', hex: '6284C1', rgb: '98,132,193', cmyk: '49,32,0,24' },
    { color: '#8061A5', hex: '8061A5', rgb: '128,97,165', cmyk: '22,41,0,35' },
    { color: '#FFFFFF', hex: 'FFFFFF', rgb: '255,255,255', cmyk: '0,0,0,0' },
  ],
};

const Brand = () => (
  <MainLayout pageMetadata={seo} theme="gray" footerWithTopBorder>
    <Hero />
    <BrandFeatures />
    <Logos
      title="Responsive logo"
      description="These are different versions of the primary logo that you can incorporate into your design."
      downloadLink="/data/cilium-logos.zip"
    />
    <Colors
      title="Cilium Colors"
      description="You can use the colors of the website to create partner materials. <br />Please note that the colors for the logo are highlighted separately."
      linkUrl="/data/cilium-brandbook.pdf"
      colors={ciliumColors}
    />
    <Logos
      title="Hubble"
      description="Hubble is a sub-project of Cilium. <br />Within this section, you'll discover all the essential brand materials."
      downloadLink="/data/hubble-logos.zip"
      titleSize="lg"
      brand="hubble"
    />
    <Colors
      title="Hubble Colors"
      description="Here are all of the colors of the Hubble logo. <br />Please note that the colors for the logo are highlighted separately."
      colors={hubbleColors}
    />
    <Logos
      title="Tetragon"
      description="Tetragon is a sub-project of Cilium. <br />Within this section, you'll discover all the essential brand materials."
      downloadLink="/data/tetragon-logos.zip"
      titleSize="lg"
      brand="tetragon"
    />
    <Colors
      title="Tetragon Colors"
      description="Here are all of the colors of the Tetragon logo. <br />Please note that the colors for the logo are highlighted separately."
      colors={tetragonColors}
    />
    <LegalBox />
    <Community theme="gray" isTitleCentered />
  </MainLayout>
);

export default Brand;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = { ...seo, slug: pathname };
  return <SEO data={pageMetadata} />;
};
