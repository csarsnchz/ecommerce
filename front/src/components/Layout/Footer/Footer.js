import Link from 'next/link';
import { Container, Image, Button } from 'semantic-ui-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
        <Container>
            <div>
                <Link href="/">
                    <Image src="images/logo.png" alt="gaming" />
                </Link>
            </div>
            <div>
                <ul>
                    <Link href="/about-us">Terminos y Condiciones</Link>
                    <Link href="/about-us">Politica de Privacidad</Link>
                    <Link href="/about-us">Contacto</Link>
                    <Link href="/about-us"></Link>
                </ul>
            </div>
            <div className={styles.socila}>
                <Button as="a" href="#" circular color="facebook" icon="facebook" />
                <Button as="a" href="#" circular color="twitter" icon="twitter" />
                <Button as="a" href="#" circular color="instagram" icon="instagram" />
                <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
            </div>

            <div className={styles.copyright}>
                <p>© 2021 Gaming</p>
            </div>
        </Container>
    </div>
  )
}
