import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Home</h1>
      <h2>{session?.user?.role}</h2>
    </div>
  );
};

export default Home;
