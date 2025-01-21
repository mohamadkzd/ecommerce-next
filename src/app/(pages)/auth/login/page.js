"use client";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import LoginForm from "@/components/(auth)/login/loginForm";
import CheckOtpForm from "@/components/(auth)/checkOtp/checkOtpForm";
import { useState } from "react";

const Login = () => {
  const [step, setStep] = useState(1);
  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              {step == 1 && <LoginForm setStep={setStep}/>}

              {step == 2 && <CheckOtpForm setStep={setStep}/>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
