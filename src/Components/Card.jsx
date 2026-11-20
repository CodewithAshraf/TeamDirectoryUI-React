function Card(prop) {

    console.log(prop.bio)

  return (
    <div
      className="card"
      style={
        prop.image
          ? { backgroundImage: `url(${prop.image})` }
          : undefined
      }
    >
      <div className="card-overlay"></div>

      {/* Card Content */}
      <div className="card-content">
        <div className="name-row">
          <h2>{prop.name}</h2>
          {/* Verified Checkmark Icon */}
          <svg className="verified-badge" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.8 4.2L18.4 3.8L19.6 7.2L22.6 9.2L21.6 12.6L22.6 16L19.6 18L18.4 21.4L14.8 21L12 23.2L9.2 21L5.6 21.4L4.4 18L1.4 16L2.4 12.6L1.4 9.2L4.4 7.2L5.6 3.8L9.2 4.2L12 2Z"
              fill="#3897F0"
            />
            <path
              d="M8.5 12.5L10.8 14.8L15.5 9.8"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="bio">
         {prop.bio}
        </p>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-value">
              <span className="star-icon">★</span> {prop.rating}
            </div>
            <div className="stat-label">Rating</div>
          </div>

          <div className="divider"></div>

          <div className="stat-item">
            <div className="stat-value">$45k+</div>
            <div className="stat-label">Earned</div>
          </div>

          <div className="divider"></div>

          <div className="stat-item">
            <div className="stat-value">$50/hr</div>
            <div className="stat-label">Rate</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-row">
          <button className="contact-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="3" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get In Touch
          </button>

          <button className="bookmark-btn" aria-label="Save profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
