"use client";

import { useFormState } from "react-dom";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { checkOtp } from "../../../../actions/auth";
import AuthContext from "@/context/authContext";
import ResendOtpButton from "./resendOtpButton";
import { useRouter } from "next/navigation";

const CheckOtpForm = () => {
  const [stateOtp, formActionOtp] = useFormState(checkOtp, {});
  const { loginContext } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    //dar contact form tozih dade shode be sorat comment
    toast(stateOtp?.message, { type: `${stateOtp?.status}` });
    if (stateOtp?.status === "success") {
      loginContext(stateOtp?.user);
      router.push("/");
    }
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
        <ResendOtpButton />
      </div>
    </div>
  );
};

export default CheckOtpForm;
