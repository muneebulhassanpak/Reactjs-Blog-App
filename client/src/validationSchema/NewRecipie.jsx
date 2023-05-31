import * as Yup from "yup";
const validationSchema = Yup.object({
  title: Yup.string().min(4).required("Recipie must have a title"),
  imgUrl: Yup.string().min(5),
  duration: Yup.number().min(2).required("Must tell time"),
  description: Yup.string().min(10).required("Must tell how to make"),
});
export default validationSchema;
