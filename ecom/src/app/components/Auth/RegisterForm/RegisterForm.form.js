import * as Yup from "yup";

export function initialValues() {
  return {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    passwordConfirmation: "",
  };
}

export function validationSchema() {
    return Yup.object({
        username: Yup.string().required(true),
        email: Yup.string().email("Invalid email address").required(true),
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
        password: Yup.string().required(true),
        passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
        ),
    });
    }