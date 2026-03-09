import { Suspense } from "react";
import { useParams, Link } from "react-router";
import games from "../Games";

const Play: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !games[slug]) {
    return (
      <>
        <h1>Game not found</h1>
        <Link to="/">Go home</Link>
      </>
    );
  }

  const { title, Play: GameComponent } = games[slug];

  return (
    <Suspense fallback={<p>Loading {title}…</p>}>
      <GameComponent />
    </Suspense>
  );
};

export default Play;
