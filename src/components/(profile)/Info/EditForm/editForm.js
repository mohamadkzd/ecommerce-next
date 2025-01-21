"use client"

import SubmitBtn from "@/ui/submitBtn/submitBtn";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { editInfo } from "../../../../../actions/profile";

const EditForm = ({user}) => {
    const [state,fotmAction]=useFormState(editInfo,{})

    useEffect(()=>{
        toast(state?.message,{type :`${state?.status}`})
    },[state])
  return (
    <form action={fotmAction}>
      <div className="row g-4">
        <div className="col col-md-6">
          <label className="form-label">نام و نام خانوادگی</label>
          <input name="name"
            type="text"
            className="form-control"
            defaultValue={user.name}
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label">ایمیل</label>
          <input name="email"
            type="text"
            className="form-control"
            defaultValue={user.email}
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label">شماره تلفن</label>
          <input name="name"
            type="text"
            disabled
            className="form-control"
            defaultValue={user.cellphone}
          />
        </div>
      </div>

      <SubmitBtn title="ویرایش" style="btn btn-primary mt-4"/>
    </form>
  );
};

export default EditForm;
