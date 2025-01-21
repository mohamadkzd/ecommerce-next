"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { login } from "../../../../actions/auth";

const LoginForm = ({setStep}) => {
  const [stateLogin, formActionLogin] = useFormState(login, {});

  useEffect(() => {
    //   dar contact form tozih dade shode be sorat comment
    toast(stateLogin?.message, { type: `${stateLogin?.status}` });
    if (stateLogin?.status==='success') {
        setStep(2)
    }
  }, [stateLogin]);
  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionLogin}>
          <div className="mb-3">
            <label className="form-label">شماره موبایل</label>
            <input name="cellphone" type="text" className="form-control" />
          </div>

          <SubmitBtn title="ورود" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
