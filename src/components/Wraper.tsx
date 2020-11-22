import React from 'react';
import { Box } from '@chakra-ui/core';

export type WraperVariant = 'small' | 'regular'

interface WrapperProps {
  variant?: WraperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular'
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === 'regular' ? '800px' : '400px'}
      w="100%"
    >
      {children}
    </Box>
  )
}
