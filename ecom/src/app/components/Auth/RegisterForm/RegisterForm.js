import { Form } from 'semantic-ui-react';

export function RegisterForm() {
  return (
    <>
      <Form className={styles.RegisterForm}>
        <Form.Group width="equal">
            <Form.Input name="email" type="text" placeholder="Email Address"/>
            <Form.Input name="username" type="text" placeholder="User Name"/>
        </Form.Group>
        <Form.Group width="equal">
            <Form.Input name="firstname" type="text" placeholder="First Name"/>
            <Form.Input name="lastname" type="text" placeholder="Last Name"/>
        </Form.Group>
        <Form.Group width="equal">
            <Form.Input name="password" type="password" placeholder="Password"/>
            <Form.Input name="passwordConfirmation" type="password" placeholder="Password Confirmation"/>
        </Form.Group>
        <Form.Button>Register</Form.Button>    
      </Form>
    </>
  );
}