import { Link } from "next/link";
import { JoinLayout } from "@/layouts"
import styles from "./sing-in.module.scss";
import { LoginForm } from "@/components/Auth";

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.SignIn}>
          <h3 >Iniciar sesión</h3>
          
          <LoginForm />
          
          <div className={styles.actions}>
            <Link href="/join/forgot-password">
              <a>¿Olvidaste tu contraseña?</a>
            </Link>
            <Link href="./sign-up">
              <a>¿No tienes una cuenta?</a>
            </Link>
          </div>
      </div>
    </JoinLayout>
    </>
  );
}