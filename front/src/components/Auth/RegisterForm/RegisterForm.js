import { Form } from 'semantic-ui-react';
import { useFormik } from "formik";
import { initialValues, validationSchema} from "./RegisterForm.form";
import { Auth } from "@/api";
import { useRouter } from "next/router";

const authCtrl = new Auth();

export function RegisterForm() {

  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Form Sent: ", formValue);
      try {
        await authCtrl.register(formValue);
        router.push("/join/sign-in");
      } catch (error) {
        throw error;
      }
    },
  });


  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group width="equal">
            <Form.Input name="email" type="text" placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email}/>
            <Form.Input name="username" type="text" placeholder="User Name" value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username}/>
        </Form.Group>
        <Form.Group width="equal">
            <Form.Input name="firstname" type="text" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} error={formik.errors.firstname}/>
            <Form.Input name="lastname" type="text" placeholder="Last Name" value={formik.values.lastname} onChange={formik.handleChange} error={formik.errors.lastname}/>
        </Form.Group>
        <Form.Group width="equal">
            <Form.Input name="password" type="password" placeholder="Password" value={formik.values.pasword} onChange={formik.handleChange} error={formik.errors.pasword}/>
            <Form.Input name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formik.values.passwordConfirmation} onChange={formik.handleChange} error={formik.errors.passwordConfirmation}/>
        </Form.Group>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Register</Form.Button>    
      </Form>
    </>
  );
}