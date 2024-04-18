import styles from './Info.module.css';
import { useAuth } from "@/hooks";
import { Button, Icon } from "semantic-ui-react";
import { DateTime } from "luxon";

export function Info() {
  const { user } = useAuth();

  return (
      <div className={styles.info}>
        <Button icon className={styles.user}>
          <Icon name="User outline"/>
        </Button>
        <h4 className={styles.email}>Email: {user.email}</h4>
        <h3 className={styles.username}>Username: {user.username}</h3>
        <p className={styles.createdAt}>Miembro desde:{" "} {DateTime.fromISO(user.createdAt, {locale: "es"}).toFormat("DDD")}</p>
      </div>
  )
}
