import classNames from 'classnames';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/shared/button';
import Checkbox from 'components/shared/checkbox';
import Field, { FIELD_TAGS } from 'components/shared/field';
import Link from 'components/shared/link';

import SuccessHero from './images/success.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.5;

const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [formState, setFormState] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      await fetch('https://formspree.io/f/mdoblnyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
        }),
      });
      setErrorMessage(null);
      setFormState('success');
      setTimeout(() => {
        setFormState('default');
      }, 3000);
      setIsLoading(false);
      reset();
    } catch (error) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please reload the page and try again');
    }
  };

  return (
    <section>
      <motion.form
        className="space-y-6 p-8"
        animate={{
          opacity: formState === 'success' ? 0 : 1,
          transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION },
        }}
        method="POST"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative flex lg:space-x-8 lg:space-y-0 lg:flex-row justify-between flex-col space-y-6">
          <Field
            fieldName="Name"
            type="text"
            name="firstName"
            autoComplete="given-name"
            {...register('firstName')}
          />
          <Field
            fieldName="Email"
            type="email"
            name="email"
            error={errors?.email?.message}
            autoComplete="email"
            {...register('email', {
              required: 'Email address is required field',
              pattern: {
                value: emailRegexp,
                message: 'Please enter a valid email address',
              },
            })}
          />
        </div>
        <div className="flex lg:space-x-8 lg:space-y-0 lg:flex-row justify-between flex-col space-y-6">
          <Field
            fieldName="Cilium Slack Username"
            type="text"
            name="ciliumSlackUsername"
            {...register('username')}
          />
          <Field
            fieldName="How are you using Cilium?"
            type="text"
            name="howAreYouUsingCilium"
            {...register('usingCilium')}
          />
        </div>
        <Field tag={FIELD_TAGS.TEXTAREA} fieldName="Message" {...register('message')} />
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
        <Button size="md" theme="primary" type="submit" loading={isLoading}>
          Send Story
        </Button>
      </motion.form>
      {formState === 'success' && (
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: APPEAR_AND_EXIT_ANIMATION_DURATION },
          }}
        >
          <SuccessHero />
          <h3 className="font-semibold text-3xl leading-none">Thanks for your story!</h3>
          <span className="mt-3">We will get in touch with you as soon as possible</span>
          <Link className="mt-8" theme="primary-1" to="/get-involved">
            back to get involved
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Form;
