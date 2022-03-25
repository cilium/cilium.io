import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
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

const Form = ({ formClassName }) => {
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
    <section className={formClassName}>
      <motion.form
        className="space-y-6"
        animate={{
          display: formState === 'success' ? 'none' : 'block',
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
                id="reviewAbstract"
                label="Reviewing an abstract"
                name="reviewAbstract"
                value="reviewAbstract"
                {...register('reviewAbstract')}
              />
            </li>
            <li>
              <Checkbox
                id="writePost"
                label="Writing a blog post"
                name="writePost"
                value="writePost"
                {...register('writePost')}
              />
            </li>
            <li>
              <Checkbox
                id="polishPresentation"
                label="Polish a presentation"
                name="polishPresentation"
                value="polishPresentation"
                {...register('polishPresentation')}
              />
            </li>
            <li>
              <Checkbox
                id="getRetweet"
                label="Getting a Retweet"
                name="getRetweet"
                value="getRetweet"
                {...register('getRetweet')}
              />
            </li>
            <li>
              <Checkbox
                id="findSpeaker"
                label="Finding a speaker for an event or livestream"
                name="findSpeaker"
                value="findSpeaker"
                {...register('findSpeaker')}
              />
            </li>
            <li>
              <Checkbox
                id="echoNews"
                label="Submitting to eCHO News"
                name="echoNews"
                value="echoNews"
                {...register('echoNews')}
              />
            </li>
            <li>
              <Checkbox
                id="other"
                label="Other"
                name="other"
                value="other"
                {...register('other')}
              />
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
          <img src={SuccessHero} alt="" loading="eager" />
          <h3 className="font-semibold text-xl lg:text-3xl leading-none text-center">
            Thanks for your story!
          </h3>
          <span className="mt-3 text-sm lg:text-base text-center">
            We will get in touch with you as soon as possible
          </span>
          <Link className="mt-8 mb-12" type="text" theme="primary" to="/get-involved">
            back to get involved
          </Link>
        </motion.div>
      )}
    </section>
  );
};

Form.propTypes = {
  formClassName: PropTypes.string,
};

Form.defaultProps = {
  formClassName: null,
};

export default Form;
