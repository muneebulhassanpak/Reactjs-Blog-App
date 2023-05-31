import * as Yup from "yup";
const validationSchema = Yup.object({
  fullname: Yup.string().min(4).required("Please mention your fullname"),
  username: Yup.string().min(2).required("Please choose a username"),
  password: Yup.string().min(4).required("Please choose password "),
});
export default validationSchema;
