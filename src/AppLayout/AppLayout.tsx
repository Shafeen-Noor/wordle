import { Outlet, Link } from "react-router"
import styles from "./AppLayout.module.css"

const AppLayout: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout