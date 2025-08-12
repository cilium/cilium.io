import { yupResolver } from '@hookform/resolvers/yup';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from 'components/shared/button';
import Checkbox from 'components/shared/checkbox';
import Field, { FIELD_TAGS } from 'components/shared/field';
import Link from 'components/shared/link';

import successHero from './images/success.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.5;

const FORM_STATES = {
  DEFAULT: 'default',
  ERROR: 'error',
  SUCCESS: 'success',
};

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('Name is a required field'),
  email: yup
    .string()
    .trim()
    .email('Please provide a valid email')
    .required('Email is a required field'),
  ciliumSlackUsername: yup
    .string()
    .trim()
    .required('Cilium Slack Username is a required field'),
  howAreYouUsingCilium: yup
    .string()
    .trim()
    .required('It is a required field'),
  message: yup
    .string()
    .trim()
    .required('Message is a required field'),
});

const Form = ({ formClassName }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [formState, setFormState] = useState(FORM_STATES.DEFAULT);
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
      setFormState(FORM_STATES.SUCCESS);
      setTimeout(() => {
        setFormState(FORM_STATES.DEFAULT);
      }, 3000);
      setIsLoading(false);
      reset();
    } catch (error) {
      setFormState(FORM_STATES.ERROR);
    }
  };

  return (
    <div className={formClassName}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <m.form
            className="space-y-6"
            animate={{
              opacity: formState === FORM_STATES.SUCCESS ? 0 : 1,
              transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION },
            }}
            method="POST"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative flex flex-col justify-between space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
              <Field
                fieldName="Name"
                type="text"
                id="firstName"
                name="name"
                error={errors?.firstName?.message}
                autoComplete="given-name"
                {...register('firstName')}
              />
              <Field
                fieldName="Email"
                type="email"
                id="email"
                name="email"
                error={errors?.email?.message}
                autoComplete="email"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col justify-between space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
              <Field
                fieldName="Cilium Slack Username"
                type="text"
                id="ciliumSlackUsername"
                name="ciliumSlackUsername"
                error={errors?.ciliumSlackUsername?.message}
                {...register('ciliumSlackUsername')}
              />
              <Field
                fieldName="How are you using Cilium?"
                type="text"
                id="howAreYouUsingCilium"
                name="howAreYouUsingCilium"
                error={errors?.howAreYouUsingCilium?.message}
                {...register('howAreYouUsingCilium')}
              />
            </div>
            <Field
              className="min-h-[100px] leading-tight"
              tag={FIELD_TAGS.TEXTAREA}
              fieldName="Message"
              id="message"
              name="message"
              error={errors?.message?.message}
              {...register('message')}
            />
            <div className="border-b border-gray-4 dark:border-gray-7 pb-4">
              <span className="text-sm font-semibold text-black dark:text-white">
                What do you need help with?
              </span>
              <div className="mt-5 grid gap-x-8 gap-y-4 md:grid-cols-[repeat(2,minmax(45%,max-content))]">
                <Checkbox
                  id="reviewAbstract"
                  label="Reviewing an abstract"
                  name="reviewAbstract"
                  value="reviewAbstract"
                  {...register('reviewAbstract')}
                />

                <Checkbox
                  id="writePost"
                  label="Writing a blog post"
                  name="writePost"
                  value="writePost"
                  {...register('writePost')}
                />

                <Checkbox
                  id="polishPresentation"
                  label="Polish a presentation"
                  name="polishPresentation"
                  value="polishPresentation"
                  {...register('polishPresentation')}
                />

                <Checkbox
                  id="getRetweet"
                  label="Getting a Retweet"
                  name="getRetweet"
                  value="getRetweet"
                  {...register('getRetweet')}
                />

                <Checkbox
                  id="findSpeaker"
                  label="Finding a speaker for an event or livestream"
                  name="findSpeaker"
                  value="findSpeaker"
                  {...register('findSpeaker')}
                />

                <Checkbox
                  id="echoNews"
                  label="Submitting to eCHO News"
                  name="echoNews"
                  value="echoNews"
                  {...register('echoNews')}
                />
                <Checkbox
                  id="requestSwag"
                  label="Request swag"
                  name="requestSwag"
                  value="requestSwag"
                  {...register('requestSwag')}
                />

                <Checkbox
                  id="other"
                  label="Other"
                  name="other"
                  value="other"
                  {...register('other')}
                />
              </div>
            </div>
            <Button
              className="w-full md:w-auto"
              size="md"
              theme="primary-1"
              type="submit"
              loading={isLoading}
            >
              Send Story
            </Button>
          </m.form>
        </AnimatePresence>
        <AnimatePresence>
          {formState === FORM_STATES.SUCCESS && (
            <m.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: APPEAR_AND_EXIT_ANIMATION_DURATION },
              }}
            >
              <img src={successHero} alt="" loading="eager" />
              <h3 className="text-center text-xl font-semibold leading-none lg:text-3xl">
                Thanks for your story!
              </h3>
              <span className="mt-3 text-center text-sm lg:text-base">
                We will get in touch with you as soon as possible
              </span>
              <Link className="mt-8 mb-12" type="text" theme="primary" to="/get-involved">
                Back to get involved
              </Link>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

Form.propTypes = {
  formClassName: PropTypes.string,
};

Form.defaultProps = {
  formClassName: null,
};

export default Form;
