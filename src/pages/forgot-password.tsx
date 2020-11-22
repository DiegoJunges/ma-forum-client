import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import InputField from '../components/InputField';
import { Wrapper } from '../components/Wraper';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useForgotPasswordMutation } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword({ variables: values });
          setComplete(true);
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>
              if an account with that email exists, we sent you can email
            </Box>
        ) : (
          <Form>
              <InputField
                name='email'
                placeholder='email'
                label='Email'
                type='email'
              />
            <Button
              mt={4}
              isLoading={isSubmitting}
              type='submit'
              colorScheme='teal'
            >
              Forgot password
            </Button>
          </Form>
        )}

      </Formik>
    </Wrapper>
  )
}

export default withApollo({ ssr: false })(ForgotPassword);