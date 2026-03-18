import { useParams, Link } from "react-router"
import leaderboardData from "./data"
import styles from "./Leaderboard.module.css"

const LeaderboardDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !leaderboardData[slug]) {
    return (
      <>
        <h1 className={styles.heading}>Not found</h1>
        <Link className={styles.link} to="/leaderboard">Back to leaderboard</Link>
      </>
    )
  }

  const { title, scores } = leaderboardData[slug]

  return (
    <>
      <h1 className={styles.heading}>{title} — Top 10</h1>
      <ol className={styles.list}>
        {scores.slice(0, 10).map((entry, i) => (
          <li key={i}>{entry.name} — {entry.score}</li>
        ))}
      </ol>
      <Link className={styles.link} to="/leaderboard">← Back to leaderboard</Link>
    </>
  )
}

export default LeaderboardDetail