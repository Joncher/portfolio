import React from 'react';

function ProjectInfo(props) {
  let githubLink = 'Github Here';
  if (!props.props.github) {
    githubLink = 'No Github';
  }
  let demoLink = 'Demo Here';
  if (!props.props.demo) {
    demoLink = 'No Demo';
  }

  return (
    <div>
      <div>
        <strong>Title: &nbsp;</strong>

        {props.props.title}
      </div>
      <div>
        <strong>Description: &nbsp;</strong>
        {props.props.description}
      </div>
      <div>
        <strong>Details: </strong>
        <ul>
          {props.props.details.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <a href={props.props.demo} target="_blank" style={{ margin: 'auto' }}>
        {demoLink}
      </a>
      <br />
      <a href={props.props.github} target="_blank">
        {githubLink}
      </a>
    </div>
  );
}
export default ProjectInfo;
