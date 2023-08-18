import React, { ReactNode } from 'react';

interface TextErrorProps {
  children: ReactNode; // Assuming the error message is a string
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <div className='error'>{children}</div>;
};

export default TextError;