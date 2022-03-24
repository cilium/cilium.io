import classNames from 'classnames';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ActiveIcon from './images/active.inline.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.5;

const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

const title = 'Subscribe to the eCHO News';
const description =
  'Want to stay up to date with the latest from around the Cilium  and eBPF community?';

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ serverError, error }) => {
  if (!error && !serverError) {
    return null;
  }
  const errMsg = error || serverError;
  return <span className="absolute top-[calc(100%+0.5rem)] text-additional-1">{errMsg}</span>;
};

const Subscribe = () => {
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
      await fetch('https://formspree.io/f/xoqrnawo', {
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
    <section className="mt-10 bg-gray-4 py-10 text-center md:mt-20 md:py-14 lg:mt-32 lg:pt-20 lg:pb-24">
      <Container>
        <Heading tag="h2">{title}</Heading>
        <p className="mt-2.5">{description}</p>
        <div className="relative">
          <motion.form
            className="relative mx-auto mt-10 flex max-w-[656px] flex-col space-y-3 xs:space-y-0"
            animate={{
              opacity: formState === 'success' ? 0 : 1,
              transition: { duration: APPEAR_AND_EXIT_ANIMATION_DURATION },
            }}
            method="POST"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className={classNames(
                'remove-autocomplete-styles w-full appearance-none rounded border py-3 pl-6 pr-6 leading-normal shadow-input transition-colors duration-200 xs:rounded-xl xs:py-4 xs:pr-36 md:text-lg lg:py-[22px] lg:text-xl xl:pr-44',
                'outline-none hover:border-gray-2 focus:border-primary-1',
                (errors?.email?.message || errorMessage) &&
                  'border-additional-1 hover:border-additional-1 focus:border-additional-1'
              )}
              type="email"
              name="email"
              placeholder="Email address..."
              {...register('email', {
                required: 'Email address is required field',
                pattern: {
                  value: emailRegexp,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            <ErrorMessage serverError={errorMessage} error={errors?.email?.message} />
            <Button
              className="right-3 top-1/2 h-12 items-center !text-lg xs:absolute xs:h-auto xs:-translate-y-1/2 lg:px-7"
              theme="primary-1"
              type="submit"
              loading={isLoading}
            >
              Subscribe
            </Button>
          </motion.form>
          {formState === 'success' && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center space-y-5 xs:flex-row xs:space-y-0 xs:space-x-2.5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: APPEAR_AND_EXIT_ANIMATION_DURATION },
              }}
            >
              <ActiveIcon className="shrink-0" />
              <span className="text-2xl font-bold leading-none">Thanks for subscribing!</span>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
export default Subscribe;
