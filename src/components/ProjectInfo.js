import React from 'react';

function ProjectInfo(props) {
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
        Demo Here
      </a>
      <br />
      <a href={props.props.github}>Github Here</a>
    </div>
  );
}
export default ProjectInfo;
