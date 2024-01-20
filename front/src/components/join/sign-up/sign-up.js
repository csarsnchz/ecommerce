import Link from "next/link";
import { JoinLayout } from "@layouts";
import {} from "@/components/Auth";
import styles from "./sign-up.module.scss";

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Crear cuenta</h3>
          {/* FROM */}
          <div className={styles.actions}>
            <Link href="/join/sign-in">
              <a>Atrás</a>
            </Link>
            <button>Crear cuenta</button>
          </div>
        </div>
      </JoinLayout>  
    </>
  );
}