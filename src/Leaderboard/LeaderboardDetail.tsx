import { useParams, Link } from "react-router";
import leaderboardData from "./data";

const LeaderboardDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !leaderboardData[slug]) {
    return (
      <>
        <h1>Not found</h1>
        <Link to="/leaderboard">Back to leaderboard</Link>
      </>
    );
  }

  const { title, scores } = leaderboardData[slug];

  return (
    <>
      <h1>{title} — Top 10</h1>
      <ol>
        {scores.slice(0, 10).map((entry, i) => (
          <li key={i}>
            {entry.name} — {entry.score}
          </li>
        ))}
      </ol>
      <Link to="/leaderboard">← Back to leaderboard</Link>
    </>
  );
};

export default LeaderboardDetail;
