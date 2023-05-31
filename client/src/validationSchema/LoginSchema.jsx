import * as Yup from "yup";
const validationSchema = Yup.object({
  username: Yup.string().min(2).required("Please write your username"),
  password: Yup.string().min(4).required("Please write your password "),
});
export default validationSchema;
