import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
  companyName: Yup.string().required("This field is required"),
  title: Yup.string().required("This field is required"),
  message: Yup.string().required("This field is required"),
});
