import { Link } from "react-router"
import leaderboardData from "./data"

const LeaderboardList: React.FC = () => {
  return (
    <>
      <h1>Leaderboard</h1>
      {Object.entries(leaderboardData).map(([slug, { title, scores }]) => (
        <div key={slug}>
          <h2>{title}</h2>
          <ol>
            {scores.slice(0, 3).map((entry, i) => (
              <li key={i}>
                {entry.name} — {entry.score}
              </li>
            ))}
          </ol>
          <Link to={`/leaderboard/${slug}`}>See full leaderboard →</Link>
        </div>
      ))}
    </>
  )
}

export default LeaderboardList
