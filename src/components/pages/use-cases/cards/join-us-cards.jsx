import React from 'react';

const customShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

const JoinUsCard = () => (
  <div className="my-2 pt-0 pb-12 md:pb-24 md:pt-8">
    <div className="container mx-auto w-10/12">
      <h3 className="mb-8 text-center text-xl font-bold">Want to Learn More?</h3>
      <div className="flex flex-col flex-wrap gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-16">
        <div
          className="rounded-[10px] bg-white p-6 text-center"
          style={{ boxShadow: `${customShadow}` }}
        >
          <p className="font-bold">Join the Cilium Slack</p>
          <p className="mx-auto h-[180px] w-full max-w-[320px] pt-4 pb-6">
            Cilium is an open source project that anyone in the community can use, improve, and
            enjoy. We'd love you to join us on Slack! Find out what's happening and get involved.
          </p>
          <a href="https://cilium.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
            >
              Join the Slack
            </button>
          </a>
        </div>
        <div
          className="rounded-[10px] bg-white p-6 text-center"
          style={{ boxShadow: `${customShadow}` }}
        >
          <p className="font-bold">Read the Documentation</p>
          <p className="mx-auto h-[180px] w-full max-w-[320px] pt-4 pb-6">
            Cilium has extensive documentation that covers its features and use cases. The docs also
            features tutorials for common user stories.
          </p>

          <a href="https://docs.cilium.io/en/stable/" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
            >
              Read the Docs
            </button>
          </a>
        </div>
        <div
          className="rounded-[10px] bg-white p-6 text-center"
          style={{ boxShadow: `${customShadow}` }}
        >
          <p className="font-bold">Get Help </p>
          <p className="mx-auto h-[180px] w-full max-w-[320px] pt-4 pb-6">
            Get help with Cilium through Slack, Github, training, support, and FAQs. The community
            can also help you tell or promote your story around Cilium.
          </p>
          <a href="https://cilium.io/get-help/" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="rounded-[10px] bg-[#0080FF] py-2 px-6 text-center font-bold text-white"
            >
              Get Help
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default JoinUsCard;
