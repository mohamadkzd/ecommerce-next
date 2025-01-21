"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { checkOtp } from "../../../../actions/auth";

const CheckOtpForm = () => {
  const [stateOtp, formActionOtp] = useFormState(checkOtp, {});

  useEffect(() => {
    //dar contact form tozih dade shode be sorat comment
    toast(stateOtp?.message, { type: `${stateOtp?.status}` });
  }, [stateOtp]);

  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionOtp}>
          <div className="mb-3">
            <label className="form-label">کد ورود</label>
            <input name="otp" type="text" className="form-control" />
          </div>

          <SubmitBtn title="تایید" />
        </form>
      </div>
    </div>
  );
};

export default CheckOtpForm;
