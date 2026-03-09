import { Outlet, Link } from "react-router";

const AppLayout: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default AppLayout;
