import IntroSection from 'components/pages/use-cases/';
import MainLayout from 'layouts/main/main/intro-section';
import React from 'react';

import JoinUsCard from 'components/pages/use-cases/cards';
import ClickHouseLogo from 'icons/logo-clickhouse.inline.svg';
import Form3Logo from 'icons/logo-form3.inline.svg';
import AstronautBee from 'images/pages/usecase/astronaut-bee.png';
import ClusterMeshImage1 from 'images/pages/usecase/clustermesh-1.png';
import ClusterMeshImage4 from 'images/pages/usecase/clustermesh-4.png';
import ClusterMeshImage2 from 'images/pages/usecase/clutsermesh-2.png';
import ClusterMeshImage3 from 'images/pages/usecase/clutsermesh-3.png';

import ArrowIcon from '../../icons/arrow.inline.svg';

const ItemPage = () => (
    <MainLayout>
      <section className="bg-[#F6F7F8]">
        <div className="pt-0 pb-12 md:pb-24 md:pt-8">
          <JoinUsCard />
        </div>
      </section>
    </MainLayout>
  );

export default ItemPage;
