import Link from "next/link";
import { JoinLayout } from "@/layouts";
import {} from "@/components/Auth";
import styles from "./sign-up.module.scss";
import { RegisterForm } from "@/components/Auth";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear cuenta</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="./sign-in">
              Atrás
            </Link>
            
            <button>Crear cuenta</button>
          </div>
        </div>
      </JoinLayout>  
    </>
  );
}