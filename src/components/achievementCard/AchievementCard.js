import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const footer = Array.isArray(cardInfo.footer) ? cardInfo.footer : [];

  const isPdf = (url) =>
    typeof url === "string" && url.toLowerCase().endsWith(".pdf");

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {footer.map((v, i) => {
          const url = v?.url || "";
          const pdf = isPdf(url);

          // If no URL, render as non-clickable
          if (!url) {
            return (
              <span
                key={i}
                className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
                style={{ opacity: 0.6, cursor: "not-allowed" }}
                title="Link not available"
              >
                {v?.name || "Link"}
              </span>
            );
          }

            return (
            <a
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              href={url}
              // PDFs should download (no new tab)
              {...(pdf ? { download: v?.downloadName || "" } : {})}
              // Keep navigation in the same tab for non-PDF links too
              target="_self"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {v?.name || "Link"}
            </a>
          );
        })}

      </div>
    </div>
  );
}
