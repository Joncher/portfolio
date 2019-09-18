import React from 'react';

const ProjectCard = props => (
  <article className="item">
    <a href="/#" className="image fit">
      <img src={props.pic} alt="" />
    </a>
    <header>
      <h3>{props.title}</h3>
    </header>
  </article>
);

export default ProjectCard;
