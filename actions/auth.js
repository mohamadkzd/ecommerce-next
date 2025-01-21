"use server";

import { postFetch } from "@/lib/config/fetcher";
import { handelError } from "@/lib/helper/helper";
import { cookies } from "next/headers";

async function login(stateLogin, formData) {
  // console.log("test",formData);

  const cellphone = formData.get("cellphone");

  // console.log("test",name);

  if (cellphone === "") {
    return {
      status: "error",
      message: "شماره موبایل الزامی است",
    };
  }

  // olgoye REGEX
  const pattern = /^(\+98|0)?9\d{9}$/;

  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل معتبر نیست",
    };
  }

  const data = await postFetch("/auth/login", { cellphone });
  // console.log("testData", data);
  // vaghti data dorost post shavad samte server va status 200 bar gardone responsi ke bar migardone login token hast ke yek meghdari dare be sorat strin login_token:"fdsfsdf"
  if (data.status === "success") {
    cookies().set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      // http only dastresi javaScript ro be cookie ha ghat mikne
      path: "/",
      maxAge: 60,
      // maxAge modat zaman etebar token , yaani digar baade modat in zamani ke mizarim dige mororgar in cookie ro baraye ma ersal nmikne ke be shekl sanie hast
    });
    return {
      status: data.status,
      message: "کد ورود با موفقیت برای شما ارسال شد ",
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}

async function checkOtp(stateOtp, formData) {
  // console.log("test",formData);

  const otp = formData.get("otp");

  // console.log("test",name);

  if (otp === "") {
    return {
      status: "error",
      message: "کد ورود الزامی است",
    };
  }

  // olgoye REGEX
  const pattern = /^[0-9]{6}$/;

  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد ورود معتبر نیست",
    };
  }

  const loginToken = cookies().get("login_token");

  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی شما معتبر نیست یکبار دیگر تلاش کنید ",
    };
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value,
  });
  // console.log("testData", data);
  // vaghti data dorost post shavad samte server va status 200 bar gardone responsi ke bar migardone login token hast ke yek meghdari dare be sorat strin login_token:"fdsfsdf"
  if (data.status === "success") {
    cookies().delete('login_token')
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      // http only dastresi javaScript ro be cookie ha ghat mikne
      path: "/",
      maxAge: 60,
      // maxAge modat zaman etebar token , yaani digar baade modat in zamani ke mizarim dige mororgar in cookie ro baraye ma ersal nmikne ke be shekl sanie hast
    });
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید",
      user:data.data.user
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}

export { login, checkOtp };
