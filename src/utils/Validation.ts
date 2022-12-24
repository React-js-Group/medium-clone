//? ********************************LoginSchema**********************************
//? ***************************************************************************

import * as Yup from "yup";

interface LoginValidationInfo {
  username: string;
  password: string;
}

export const LoginSchema: Yup.SchemaOf<LoginValidationInfo> =
  Yup.object().shape({
    username: Yup.string()
      .required("نام کاربری الزامی می باشد")
      .min(4, "نام کاربری نباید کمتر از 4 کاراکتر باشد")
      .max(32, "نام کاربری نباید بیشتر از 32 کاراکتر باشد"),
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
  phone: string;
  password: string;
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
    phone: Yup.string()
      .required("شماره موبایل الزامی می باشد")
      .min(10, "شماره موبایل نباید کمتر از 10 کاراکتر باشد")
      .max(11, "شماره موبایل نباید بیشتر از 11 کاراکتر باشد"),
    password: Yup.string()
      .required("رمز عبور الزامی می باشد")
      .min(8, "کلمه عبور نباید کمتر از 8 کاراکتر باشد")
      .max(32, "رمز عبور نباید بیشتر از 32 کاراکتر باشد"),
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
