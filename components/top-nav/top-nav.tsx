import styles from "./topNav.module.scss";

export default function TopNav() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>ItineraryGPT</p>
    </div>
  );
}
