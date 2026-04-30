import React, {useContext} from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() 
{
    const {isDark} = useContext(StyleContext);

    if (!publicationsSection.display) 
    {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main" id="publications">
            <div className="publications-main-div">

                <div className="publications-header">
                    <h1
                        className={
                            isDark
                            ? "dark-mode heading publications-heading"
                            : "heading publications-heading"
                        }
                    >
                        {publicationsSection.title}
                    </h1>

                    <p
                        className={
                            isDark
                            ? "dark-mode subTitle publications-subtitle"
                            : "subTitle publications-subtitle"
                        }
                    >
                        {publicationsSection.subtitle}
                    </p>
                </div>

                <div className="publications-list">
                {
                    publicationsSection.publications.map((publication, i) => {
                        return (
                            <PublicationCard
                                key={i}
                                isDark={isDark}
                                publication={publication}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
        </Fade>
  );
}