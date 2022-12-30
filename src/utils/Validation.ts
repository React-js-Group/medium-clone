//? ********************************LoginSchema**********************************
//? ***************************************************************************

import * as Yup from "yup";

interface LoginValidationInfo {
  email: string;
  password: string;
}

export const LoginSchema: Yup.SchemaOf<LoginValidationInfo> =
  Yup.object().shape({
    email: Yup.string()
      .required("ایمیل الزامی می باشد")
      .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
      .required("رمز عبور الزامی می باشد")
      .min(8, "کلمه عبور نباید کمتر از 8 کاراکتر باشد")
      .max(32, "رمز عبور نباید بیشتر از 32 کاراکتر باشد"),
  });

//? **********************************RegisterSchema**************************
//? ***************************************************************************

interface RegisterValidationInfo {
  username: string;
  email: string;
  password: string;
  password2: string;
}
export const RegisterSchema: Yup.SchemaOf<RegisterValidationInfo> =
  Yup.object().shape({
    username: Yup.string()
      .required("نام کاربری الزامی می باشد")
      .min(4, "نام کاربری نباید کمتر از 4 کاراکتر باشد")
      .max(32, "نام کاربری نباید بیشتر از 32 کاراکتر باشد"),
    email: Yup.string()
      .email("ایمیل معتبر نمی باشد")
      .required("ایمیل الزامی می باشد"),
    password: Yup.string()
      .required("رمز عبور الزامی می باشد")
      .min(8, "رمز عبور نباید کمتر از 8 کاراکتر باشد")
      .max(32, "رمز عبور نباید بیشتر از 32 کاراکتر باشد"),
    password2: Yup.string()
      .required("تکرار رمز عبور الزامی می باشد")
      .oneOf([Yup.ref("password"), null], "تکرار رمز عبور مطابقت ندارد")
      .min(8, "تکرار رمز عبور نباید کمتر از 8 کاراکتر باشد")
      .max(32, "تکرار رمز عبور نباید بیشتر از 32 کاراکتر باشد"),
  });
//? *****************************bookMarNameSchema*******************************
//? ***************************************************************************
interface bookMarkModuleSchema {
  bookMarkName: string;
}
export const bookMarkModuleSchema: Yup.SchemaOf<bookMarkModuleSchema> =
  Yup.object().shape({
    bookMarkName: Yup.string()
      .required("وارد کردن نام لیست الزامی می باشد")

      .max(32, "حداکثر کارکتر های ورودی نباید بیشتر 32 باشد"),
  });
