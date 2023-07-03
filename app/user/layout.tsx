import { Inter } from 'next/font/google'
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-Migué',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <div className={styles.barra_esquerda}>
          <div className={styles.overlap_3}>
            <div className={styles.rectangle_2} />
            <div className={styles.sair}>
              <div className={styles.text_wrapper_5}>Sair</div>
              <img
                className={styles.icon_sair}
                alt="Icon sair"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-sair.svg"
              />
            </div>
            <div className={styles.professores}>
              <div className={styles.text_wrapper_6}>Professores</div>
              <img
                className={styles.img}
                alt="Icon professores"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-professores.svg"
              />
            </div>
            <div className={styles.disciplinas}>
              <div className={styles.text_wrapper_7}>Disciplinas</div>
              <img
                className={styles.icon_disciplinas_2}
                alt="Icon disciplinas"
                src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-disciplinas.svg"
              />
            </div>
            <div className={styles.pgina_inicial}>
              <div className={styles.overlap_group_3}>
                <div className={styles.rectangle_3} />
                <div className={styles.text_wrapper_8}>Pagina Inicial</div>
                <img
                  className={styles.home}
                  alt="Home"
                  src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/home.svg"
                />
              </div>
            </div>
            <img
              className={styles.logo_e_migu_branco_2}
              alt="Logo e migu branco"
              src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/logo-e-migu--branco@2x.png"
            />
          </div>
          <img
            className={styles.icon_voltar}
            alt="Icon voltar"
            src="https://generation-sessions.s3.amazonaws.com/947dd278e122fe6a115d674876e525b1/img/icon-voltar.svg"
          />
        </div>
      
    </html>
  )
}
