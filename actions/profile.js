"use server";

import { postFetch } from "@/lib/config/fetcher";
import { handelError } from "@/lib/helper/helper";
import { cookies } from "next/headers";

async function editInfo(stateOtp, formData) {
  // console.log("test",formData);

  const name = formData.get("name");
  const email = formData.get("email");

  if (name === "") {
    return {
      status: "error",
      message: "فیلد نام و نام خانوادگی الزامی است",
    };
  }
  if (email === "") {
    return {
      status: "error",
      message: "فیلد ایمیل الزامی است",
    };
  }

  const token = cookies().get("token");

  const data = await postFetch(
    "/auth/check-otp",
    {
      name,
      email,
    },
    { Authorization: `Bearer ${token.value}` }
  );
  // console.log("testData", data);
  // vaghti data dorost post shavad samte server va status 200 bar gardone responsi ke bar migardone login token hast ke yek meghdari dare be sorat strin login_token:"fdsfsdf"
  if (data.status === "success") {
    return {
      status: data.status,
      message: "ویرایش اطلاعات با موفقیت انجام شد",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}

export { editInfo };
