import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({publication, isDark}) 
{
 
    function renderCitation(citation) 
    {
 
        if (Array.isArray(citation)) 
        {
            return citation.map((part, index) => {
                let content = part.text;

                if (part.bold && part.italic) 
                {
                    content = (
                        <strong>
                        <em>{part.text}</em>
                        </strong>
                        );
                } 
                else if (part.bold) 
                {
                content = <strong>{part.text}</strong>;
                } 
                else if (part.italic) 
                {
                content = <em>{part.text}</em>;
                }

                return <React.Fragment key={index}>{content}</React.Fragment>;
            });
        }

        return citation;
    }

    return (
        <div className={isDark ? "dark-mode publication-card" : "publication-card"}>
        <h3 className={isDark ? "dark-mode publication-title" : "publication-title"}>
            {publication.title}
        </h3>

        <p className={isDark ? "dark-mode publication-meta" : "publication-meta"}>
            {publication.venue} | {publication.date}
        </p>

        <p className={isDark ? "dark-mode publication-citation" : "publication-citation"}>
            {renderCitation(publication.citation)}
        </p>

        <a
            className={isDark ? "dark-mode publication-button" : "publication-button"}
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            View Publication
        </a>
        </div>
    );
}