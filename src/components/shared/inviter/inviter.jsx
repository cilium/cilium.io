import React, { useEffect } from 'react';

const CommunityInviter = () => {
  useEffect(() => {
    window.CommunityInviterAsyncInit = function () {
      window.CommunityInviter.init({
        app_url: 'cilium-and-ebpf-slack',
        team_id: 'cilium',
      });
    };

    const script = document.createElement('script');
    script.src = 'https://communityinviter.com/js/communityinviter.js';
    script.id = 'Community_Inviter';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="CommunityInviter" />;
};

export default CommunityInviter;
