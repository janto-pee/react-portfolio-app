import * as Yup from "yup";

export interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Name must be minimum 2")
    .max(100, "Name must not be more than 100 characters")
    .required("Name is required"),
  lastname: Yup.string()
    .min(2, "Name must be minimum 2")
    .max(100, "Name must not be more than 100 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string()
    .min(2, "Subject must be minimum 2")
    .max(100, "Subject must not be more than 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(2, "Message must be minimum 2")
    .max(100, "Message must not be more than 100 characters")
    .required("Message is required"),
});
