import React from 'react';

import Button from 'components/shared/button';
import Checkbox from 'components/shared/checkbox';
import Field, { FIELD_TAGS } from 'components/shared/field';

const Form = () => (
  <form className="space-y-6 p-8">
    <div className="flex lg:space-x-8 lg:space-y-0 lg:flex-row justify-between flex-col space-y-6">
      <Field fieldName="Name" type="text" name="firstName" autoComplete="given-name" />
      <Field fieldName="Email" type="email" name="email" autoComplete="email" />
    </div>
    <div className="flex lg:space-x-8 lg:space-y-0 lg:flex-row justify-between flex-col space-y-6">
      <Field fieldName="Cilium Slack Username" type="text" name="ciliumSlackUsername" />
      <Field fieldName="How are you using Cilium?" type="text" name="howAreYouUsingCilium" />
    </div>
    <Field tag={FIELD_TAGS.TEXTAREA} fieldName="Message" />
    <div className="border-b border-gray-4 pb-4">
      <span className="text-sm font-semibold">What do you need help with?</span>
      <ul className="mt-5 gap-x-8 grid md:grid-cols-[repeat(2,minmax(45%,max-content))] gap-y-4">
        <li>
          <Checkbox
            type="checkbox"
            id="Reviewing an abstract"
            label="Reviewing an abstract"
            name="Reviewing an abstract"
            value="Reviewing an abstract"
          />
        </li>
        <li>
          <Checkbox
            id="Writing a blog post"
            label="Writing a blog post"
            name="Writing a blog post"
            value="Writing a blog post"
          />
        </li>
        <li>
          <Checkbox
            id="Polish a presentation"
            label="Polish a presentation"
            name="Polish a presentation"
            value="Polish a presentation"
          />
        </li>
        <li>
          <Checkbox
            id="Getting a Retweet"
            label="Getting a Retweet"
            name="Getting a Retweet"
            value="Getting a Retweet"
          />
        </li>
        <li>
          <Checkbox
            id="Finding a speaker for an event or livestream"
            label="Finding a speaker for an event or livestream"
            name="Finding a speaker for an event or livestream"
            value="Finding a speaker for an event or livestream"
          />
        </li>
        <li>
          <Checkbox
            id="Submitting to eCHO News"
            label="Submitting to eCHO News"
            name="Submitting to eCHO News"
            value="Submitting to eCHO News"
          />
        </li>
        <li>
          <Checkbox id="Other" label="Other" name="Other" value="Other" />
        </li>
      </ul>
    </div>
    <Button size="md" theme="primary" to="/">
      Send Story
    </Button>
  </form>
);

export default Form;
