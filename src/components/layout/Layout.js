import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'

const Layout = ({children,title="World Ranks"}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <a href=''>World Ranks</a>
      </header>

      <main className={styles.main}>
       {children}
      </main>

      <footer className={styles.footer}>
       <p>All rights reserved by  <a target="_blank" href='https://github.com/pustian-rafiq'>Md. Rafiqul Islam</a></p>
      </footer>
    </div>
  )
}

export default Layout