import { useState } from "react";

export function XFollowCard({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-follow-button is-following"
    : "tw-follow-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-header">
        <img
          className="tw-follow-avatar"
          src={`https://unavatar.io/x/${userName}`}
          alt="El avatar de Emerson"
        />
        <div className="tw-follow-info">
          <strong>{children}</strong>
          <span className="tw-follow-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-text">{text}</span>
          <span className="tw-follow-unfollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
