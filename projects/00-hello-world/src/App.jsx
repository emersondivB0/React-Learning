import "./App.css";
import { XFollowCard } from "./components/XFollowCard/XFollowCard";

const users = [
  {
    name: "Emerson González",
    userName: "EmersonDvlmt",
    isFollowing: true,
  },
  {
    name: "Ubuntu",
    userName: "ubuntu",
    isFollowing: false,
  },
  {
    name: "The Linux Foundation",
    userName: "linuxfoundation",
    isFollowing: false,
  },
  {
    name: "Arch Linux ARM",
    userName: "ArchLinuxARM",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <XFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </XFollowCard>
      ))}
    </section>
  );
}

export default App;
