import { Form} from "semantic-ui-react";

export function LoginForm() {
  return (
    <Form>
        <Form.Input name="identifier" type="text" placeholder="Email" />
        <Form.Input name="password" type="password" placeholder="Password" />
        <Form.Button type="submit" fluid>
            Login
        </Form.Button>
    </Form>
  );
}