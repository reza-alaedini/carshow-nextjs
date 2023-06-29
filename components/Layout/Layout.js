import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h2>کارشو</h2>
        <p>ماشین خودت رو ببین و بخر !</p>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        پروژه نکست جی اس |{" "}
        <a href="https://reza-alaedini.vercel.app">رضا علاالدینی</a> &copy;
      </footer>
    </>
  );
}

export default Layout;
