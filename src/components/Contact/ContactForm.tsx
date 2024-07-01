import { FormValues, validationSchema } from "../../utils/formValidation";
import { Field, Formik, FormikHelpers, FormikValues } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
    toast("Form Successfully Submitted!");
  };

  return (
    <div className="w-full space-y-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          values,
          touched,
          handleChange,
          handleBlur,
          errors,
          handleSubmit,
        }) => (
          <form
            action=""
            onSubmit={handleSubmit}
            className="mt-4 space-y-6 w-full text-start"
          >
            <div className="flex flex-col lg:flex-row items-center gap-4 text-left">
              <div className="w-full space-y-4">
                <label className="text-red-500" htmlFor="firstname">
                  <span className="text-neutral-400">FISRT NAME</span>{" "}
                  {errors.firstname && touched.firstname && errors.firstname}
                </label>
                <Field
                  name="firstname"
                  type="text"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
              </div>

              <div className="w-full space-y-4">
                <label className="text-red-500" htmlFor="lastname">
                  <span className="text-neutral-400">LAST NAME</span>{" "}
                  {errors.lastname && touched.lastname && errors.lastname}
                </label>
                <Field
                  name="lastname"
                  type="text"
                  className="p-4 rounded-md bg-black w-full text-primary-200"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
              </div>
            </div>

            <div className="w-full space-y-4">
              <label className="text-red-500" htmlFor="email">
                <span className="text-neutral-400">YOUR EMAIL</span>{" "}
                {errors.email && touched.email && errors.email}
              </label>
              <Field
                name="email"
                type="text"
                className="p-4 rounded-md bg-black w-full text-primary-200"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="text-left">
              <label className="text-red-500" htmlFor="subject">
                <span className="text-neutral-400">SUBJECT</span>{" "}
                {errors.subject && touched.subject && errors.subject}
              </label>
              <Field
                name="subject"
                type="text"
                className="p-4 rounded-md bg-black w-full text-primary-200"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
            </div>
            <div className="text-left">
              <label className="text-red-500" htmlFor="message">
                <span className="text-neutral-400">YOUR MESSAGE</span>{" "}
                {errors.message && touched.message && errors.message}
              </label>
              <Field
                as="textarea"
                name="message"
                id=""
                cols={30}
                rows={7}
                className="px-4 py-2 rounded-md bg-black w-full text-primary-200"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></Field>
            </div>

            <input
              disabled={isSubmitting}
              type="submit"
              className="px-6 py-4 text-lg text-gray-200 bg-secondary-600 rounded-md w-full"
            />
            <ToastContainer />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
