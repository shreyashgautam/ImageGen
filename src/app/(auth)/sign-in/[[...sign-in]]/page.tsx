import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <SignIn />
    </div>
  );
};

export default SignInPage;
