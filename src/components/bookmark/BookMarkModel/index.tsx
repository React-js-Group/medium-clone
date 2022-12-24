import Input from "components/Input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import classes from "./BookMarkModel.module.scss";
import { useFormik, FormikConfig } from "formik";
import { bookMarkModuleSchema } from "utils/Validation";
import { toast } from "react-toastify";
import Button from "components/Button";

bookMarkModuleSchema;
interface optionProps {
  handelClick: any;
}

const BookMarkModel: React.FC<optionProps> = ({
  handelClick,
}): JSX.Element => {
  interface InitialForm {
    bookMarkName: string;
  }
  const initialValues: InitialForm = {
    bookMarkName: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: bookMarkModuleSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleCheckValidation = () => {
    if (formik.errors.bookMarkName) {
      toast(formik.errors.bookMarkName);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button onClick={handelClick}>
          <AiOutlineCloseCircle className={classes.closeIcon} />
        </button>
      </div>
      <div className={classes.body}>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <Input
            type={"text"}
            name={"bookMarkName"}
            label={"نام لیست"}
            placeholder={"نام لیست خود را وارد کنید "}
            onChange={formik.handleChange}
            counter={
              <span
                className={
                  formik.errors.bookMarkName && "colorRed"
                }
              >
                {formik.values.bookMarkName.length} / 32
              </span>
            }
          />
          <Button
            type="submit"
            onClick={handleCheckValidation}
            content={"اضافه کردن"}
            className={classes.btn}
          />
          {/* <button type="submit" onClick={handleCheckValidation}>
            اضافه کردم
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default BookMarkModel;
