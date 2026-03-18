import { Link } from "react-router"
import leaderboardData from "./data"
import styles from "./Leaderboard.module.css"

const LeaderboardList: React.FC = () => {
  return (
    <>
      <h1 className={styles.heading}>Leaderboard</h1>
      {Object.entries(leaderboardData).map(([slug, { title, scores }]) => (
        <div key={slug} className={styles.section}>
          <h2 className={styles.subheading}>{title}</h2>
          <ol className={styles.list}>
            {scores.slice(0, 3).map((entry, i) => (
              <li key={i}>{entry.name} — {entry.score}</li>
            ))}
          </ol>
          <Link className={styles.link} to={`/leaderboard/${slug}`}>
            See full leaderboard →
          </Link>
        </div>
      ))}
    </>
  )
}

export default LeaderboardList