import { Link } from "react-router"
import games from "../Games"
import styles from "./Home.module.css"

const Home: React.FC = () => {
  return (
    <>
      <h1 className={styles.heading}>Games</h1>
      <ul className={styles.list}>
        {Object.entries(games).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/play/${slug}`}>Play {title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home