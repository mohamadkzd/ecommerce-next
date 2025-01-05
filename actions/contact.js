"use server";

import { postFetch } from "@/lib/config/fetcher";
import { handelError } from "@/lib/helper/helper";

async function create(state, formData) {
  // console.log("test",formData);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  // console.log("test",name);

//   in if payin be in dalil ast ke vaghti kole data khali bod alaki darkhast nazane be server , va biad payame dastie khodemon ro vared kne be sorat toastify 
  if (name === "" || email === "" || subject === "" || text === "") {
    return {
      status: "error",
      message: "تمام موارد فرم تماس با ما اجباری است",
    };
  }

  // dar khate zir omadim fetcheri ke baraye POST krdn sakhte bodim ro seda zadim va url va body iy ke gharare post she samte server ke dar tabe fetcher sakhte bodim ro gharar dadim
  const data = await postFetch("/contact-us", { name, email, subject, text });
  //   console.log("testData", data);
  if (data.status === "success") {
    return {
      status: data.status,
      message: "پیان شما با موفقیت ثبت شد",
    };
  } else {
    return {
      status: data.status,
      message: handelError(data.message),
    };
  }
}

export { create };
