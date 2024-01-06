import { JoinLayout } from "@layouts"
import styles from "./sing-in.module.scss";

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.SignIn}>
          <h3 >Iniciar sesión</h3>
      </div>
    </JoinLayout>
    </>
  );
}