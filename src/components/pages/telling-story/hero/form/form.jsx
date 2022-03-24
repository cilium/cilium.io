import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/shared/button';
import Checkbox from 'components/shared/checkbox';
import Field, { FIELD_TAGS } from 'components/shared/field';
import Link from 'components/shared/link';

import SuccessHero from './images/success.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.5;

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required('First name is a required field'),
  email: yup
    .string()
    .trim()
    .email('Please provide a valid email')
    .required('Email is a required field'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [formState, setFormState] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

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
      setFormState('success');
      setTimeout(() => {
        setFormState('default');
      }, 3000);
      setIsLoading(false);
      reset();
    } catch (error) {
      setFormState('error');
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
            {...register('email')}
          />
        </div>
        <div className="flex lg:space-x-8 lg:space-y-0 lg:flex-row justify-between flex-col space-y-6">
          <Field
            fieldName="Cilium Slack Username"
            type="text"
            name="ciliumSlackUsername"
            {...register('ciliumSlackUsername')}
          />
          <Field
            fieldName="How are you using Cilium?"
            type="text"
            name="howAreYouUsingCilium"
            {...register('howAreYouUsingCilium')}
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
