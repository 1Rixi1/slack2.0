"use client";

import React, { useState } from "react";
import { SignInFlowType } from "@/features/auth/types";
import SignIn from "@/features/auth/components/SignIn";
import SignUp from "@/features/auth/components/SignUp";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlowType>("SignUp");

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === 'SignIn' ? <SignIn setState={setState}/> : <SignUp setState={setState}/>}
      </div>
    </div>
  );
};

export default AuthScreen;
