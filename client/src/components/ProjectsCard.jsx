import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

const ProjectsCard = (props) => {
  const {
    title,
    overview,
    tech_stack,
    image,
    site_link,
    github_link,
  } = props.project;
  return (
    <Card className="featured-project-card">
      <a href={site_link} target="_blank" rel="noreferrer">
        <Image src={image} alt={title} className="featured-project-card-image" />
      </a>
      <h3>{title}</h3>
      <p>{overview}</p>
      <h4>Tech Stack:</h4>
      <p>{tech_stack}</p>
      <div className="icon-row">
        <a
          href={site_link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Link to ${title} website`}
        />
        {github_link && (
          <a
            href={github_link}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} Github link`}
          >
            {' '}
            <GitHubIcon />
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectsCard;

const Card = styled.div`
  width: 30%;
  min-width: 300px;
  padding: 2rem 1.5rem 3rem;
  margin: 1rem 0.5rem;
  border: 1px solid var(--light-shade-color);
  border-radius: 5px;
  background-color: white;
  transition: all 1s ease;
  &:hover{
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  max-height: 250px;
`;
