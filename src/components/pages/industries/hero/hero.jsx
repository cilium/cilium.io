import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container/container';

const Hero = ({ children, heading, texts }) => (
  <section className="bg-[#F6F7F8] lg:pb-24">
    <Container>
      <div className="items-center justify-between lg:flex">
        <div>
          <h2 className="py-10 text-3xl font-bold lg:text-4xl">{heading}</h2>
          <div className="items-start justify-start gap-[103px] lg:flex">
            <div className="flex flex-col gap-6 lg:flex lg:w-[610px] lg:flex-col lg:gap-6">
              {texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <figure>
              {/* Added a negative margin because of extra padding within default image */}
              <img
                src="https://s3-alpha-sig.figma.com/img/7eb9/f4ea/02ffd5a315d93a10d4c4433634053841?Expires=1694995200&Signature=CZKaArYVDI8~bbgFY2dSxacGD2~dbIFYe-ZTTVVQ4-U3SO7cUmGYblAzFi2cCLoMEe~dLylXOAnxY-fudHNXZzY0tUQ1qg3wKSXZUVlQ16johaNC52xY0~3yGoZtIAEFCfuz3LTDHRcWLzWpd0u84jOqRB4umglhGPrMBbH77TyUhTD~~RiMbghfRJvfDea0axOdekxoHkDBKHy3hpsyJhrfLHmurN7Y5V4wbC~E-mW0JK8rJ0eFnOEfbJMYOSOqh6Q3HLB8f2AAG1pJJCW1lNkrMDaI4byYB1~lRvXwdKSV4997MtoxE8cJQoqcSg7yT0RVu9pr4hf2kF6XfcnNOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="h-[470px] w-[470px] lg:-mt-16"
              />
            </figure>
          </div>
        </div>
      </div>
      {children}
    </Container>
  </section>
);
Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default Hero;
