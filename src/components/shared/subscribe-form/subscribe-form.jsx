import classNames from 'classnames';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCookie, useLocation } from 'react-use';

import Button from 'components/shared/button';
import submitHubspotForm from 'utils/submit-hubspot-form';

import ActiveIcon from './images/active.inline.svg';

const APPEAR_AND_EXIT_ANIMATION_DURATION = 0.5;
const HUBSPOT_FORM_ID = 'ef11d76b-e770-455f-903b-246d91db193d';

const emailRegexp =
  // eslint-disable-next-line no-control-regex, no-useless-escape
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ serverError, error }) => {
  if (!error && !serverError) {
    return null;
  }
  const errMsg = error || serverError;
  return <span className="absolute top-[calc(100%+0.5rem)] text-additional-1">{errMsg}</span>;
};

const SubscribeForm = ({ className, inputClassName, buttonClassName, divClassName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formState, setFormState] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // HubSpot cookie tracking
  // read more: https://legacydocs.hubspot.com/docs/methods/forms/submit_form
  const [hubspotutk] = useCookie('hubspotutk');
  const { href } = useLocation();

  const onSubmit = async (values) => {
    const { email } = values;
    const fields = [{ name: 'email', value: email }];
    const context = {
      hutk: hubspotutk,
      pageUri: href,
    };
    setIsLoading(true);
    try {
      await submitHubspotForm(HUBSPOT_FORM_ID, fields, context);
      setErrorMessage(null);
      setFormState('success');
      setIsLoading(false);
    } catch (error) {
      setFormState('error');
      setIsLoading(false);
      setErrorMessage('Something went wrong. Please reload the page and try again');
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className={classNames('relative min-h-[160px]', divClassName)}>
        <m.form
          className={classNames('relative mx-auto flex flex-col space-y-3 xs:space-y-0', className)}
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
              'remove-autocomplete-styles w-full appearance-none rounded border py-3 pl-6 pr-6 leading-normal shadow-input transition-colors duration-200 xs:rounded-xl xs:py-4 xs:pr-36 md:text-lg lg:py-[22px] lg:text-xl xl:pr-44 bg-white dark:bg-[#dfe5ed]',
              'outline-none hover:border-gray-2 focus:border-primary-1',
              (errors?.email?.message || errorMessage) &&
              'border-additional-1 hover:border-additional-1 focus:border-additional-1',
              inputClassName
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
            className={classNames(
              'right-3 top-1/2 h-12 items-center !text-lg xs:absolute xs:h-auto xs:-translate-y-1/2 lg:px-7',
              buttonClassName
            )}
            theme="primary-1"
            type="submit"
            loading={isLoading}
          >
            Subscribe
          </Button>
        </m.form>
        {formState === 'success' && (
          <m.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: APPEAR_AND_EXIT_ANIMATION_DURATION },
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-3 xs:flex-row xs:space-y-0 xs:space-x-2.5">
              <ActiveIcon className="h-9 w-9 shrink-0" />
              <span className="text-xl font-bold leading-none xs:text-2xl text-black dark:text-white">
                Thanks for subscribing!
              </span>
            </div>
            <span className="mt-3.5 max-w-[280px] text-base leading-normal xs:max-w-none text-black dark:text-gray-2">
              Explore previous releases of eCHO News right now
            </span>
            <Button className="mt-5 lg:text-base" theme="primary-1" size="md" to="#archive">
              Explore Archive
            </Button>
          </m.div>
        )}
      </div>
    </LazyMotion>
  );
};

SubscribeForm.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  divClassName: PropTypes.string,
};

SubscribeForm.defaultProps = {
  className: null,
  inputClassName: null,
  buttonClassName: null,
  divClassName: null,
};

export default SubscribeForm;
