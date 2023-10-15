import React from "react";

export default function UserCard() {
  return (
    <div className="user-card">
      <div class="user-avatar">
        <img src="avatar.jpeg" alt="Your Image" />
      </div>
      <div class="user-name">
        <h3>Tatiana reine</h3>
      </div>

      <div class="user-desc">
        <span>
          Community focued artist, with a <br /> taste of everything local
        </span>
      </div>
      <div className="user-buttons">
        <a>Album</a>
        <a>Blog</a>
        <a>Website</a>
        <a>Spotify</a>
      </div>
    </div>
  );
}
