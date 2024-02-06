import { Form, FormField } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema} from "./LoginForm.form";

const authCtrl = new Auth();

export function LoginForm() {

  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Form Sent: ", formValue);
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
        console.log("Form OK");
        console.log(response);
        router.push("/");
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group width="equal">
            <Form.Input name="identifier" type="text" placeholder="Email" value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier}/>
            <Form.Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        </Form.Group>    
        <Form.Button type="submit" fluid loading={FormField.isSubmitting}>Login</Form.Button>
      </Form>
    </>
  );
}