"use server";

import { postFetch } from "@/lib/config/fetcher";
import { handelError } from "@/lib/helper/helper";
import { revalidatePath } from "next/cache";
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
    { 'Authorization': `Bearer ${token.value}` }
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

async function createAddress(stateOtp, formData) {
  // console.log("test",formData);

  const title = formData.get("title");
  const cellphone = formData.get("cellphone");
  const postal_code = formData.get("postal_code");
  const province_id = formData.get("province_id");
  const city_id = formData.get("city_id");
  const address = formData.get("address");

  if (title === "") {
    return {
      status: "error",
      message: "فیلد عنوان الزامی است",
    };
  }

  const cellphonePattern = /^(\+98|0)?9\d{9}$/;
  if (cellphone === "" || !cellphonePattern.test(cellphone)) {
    return {
      status: "error",
      message: "فیلد شماره تماس نامعتبر است",
    };
  }

  const postalCodePattern = /^\d{5}[ -]?\d{5}$/i;
  if (postal_code === "" || !postalCodePattern.test(postal_code)) {
    return {
      status: "error",
      message: "فیلده کده پستی نامعتبر است",
    };
  }

  // if (province_id === "") {
  //   return {
  //     status: "error",
  //     message: "فیلد ایمیل الزامی است",
  //   };
  // }

  // if (city_id === "") {
  //   return {
  //     status: "error",
  //     message: "فیلد ایمیل الزامی است",
  //   };
  // }
  if (address === "") {
    return {
      status: "error",
      message: "فیلده آدرس الزامی است",
    };
  }

  const token = cookies().get("token");

  const data = await postFetch(
    "/profile/addresses/create",
    {
      title,
      cellphone,
      postal_code,
      province_id,
      city_id,
      address,
    },
    { 'Authorization': `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    revalidatePath("/profile/addresses")
    return {
      status: data.status,
      message: "ثبت آدرس با موفقیت انجام شد",
      
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
} 

async function editAddress(stateOtp, formData) {
  // console.log("test",formData);

  const title = formData.get("title");
  const cellphone = formData.get("cellphone");
  const postal_code = formData.get("postal_code");
  const province_id = formData.get("province_id");
  const city_id = formData.get("city_id");
  const address = formData.get("address");
  const address_id=formData.get("address_id")

  if (title === "") {
    return {
      status: "error",
      message: "فیلد عنوان الزامی است",
    };
  }

  const cellphonePattern = /^(\+98|0)?9\d{9}$/;
  if (cellphone === "" || !cellphonePattern.test(cellphone)) {
    return {
      status: "error",
      message: "فیلد شماره تماس نامعتبر است",
    };
  }

  const postalCodePattern = /^\d{5}[ -]?\d{5}$/i;
  if (postal_code === "" || !postalCodePattern.test(postal_code)) {
    return {
      status: "error",
      message: "فیلده کده پستی نامعتبر است",
    };
  }

  if (address === "") {
    return {
      status: "error",
      message: "فیلده آدرس الزامی است",
    };
  }

  if (address_id === null || address_id==="") {
    return {
      status: "error",
      message: "شناسه ی آدرس الزامی است",
    };
  }

  const token = cookies().get("token");

  const data = await postFetch(
    "/profile/addresses/edit",
    {
      title,
      cellphone,
      postal_code,
      province_id,
      city_id,
      address,
      address_id
    },
    { 'Authorization': `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "ویرایش آدرس با موفقیت انجام شد",
      user: data.data.user,
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}


async function deleteAddress(stateOtp, formData) {

  const address_id=formData.get("address_id")

  if (address_id === null || address_id==="") {
    return {
      status: "error",
      message: "شناسه ی آدرس الزامی است",
    };
  }

  const token = cookies().get("token");

  const data = await postFetch(
    "/profile/addresses/delete",
    {
      address_id
    },
    { 'Authorization': `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    revalidatePath("/profile/addresses")
    // baraye inke bdon refresh , croud anjam beshe 
    return {
      status: data.status,
      message: "حذف آدرس با موفقیت انجام شد",
      
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}


export { editInfo, createAddress,editAddress,deleteAddress };
