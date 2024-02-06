import { Form } from "semantic-ui-react";
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

      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
        router.push("/");
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
            <Form.Input name="identifier" type="text" placeholder="Email" value={formik.values.identifier} onChange={formik.handleChange} error={formik.errors.identifier}/>
            <Form.Input name="password" type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}/>
        </Form.Group>    
        <Form.Button type="submit" fluid loading={formik.isSubmitting}>Login</Form.Button>
      </Form>
    </>
  );
}