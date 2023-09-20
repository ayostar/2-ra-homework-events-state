import React from 'react';
import './project-list.css';
import PropTypes from 'prop-types';

export default class ProjectList extends React.Component {
  render() {
    const { projectsImg } = this.props;
    const projectsColumns = [[], [], []];
    let column = 0;

    for (let i = 0; i < projectsImg.length; i += 1) {
      projectsColumns[column].push(projectsImg[i]);
      if (column === 2) column = 0;
      else column += 1;
    }

    return (
      <div className={'portfolio__project-list project-list-portfolio'}>
        <div className={'project-list-portfolio__column'}>
          {projectsColumns[0].map((projectsImg) => (
            <div
              className={'project-list-portfolio__project'}
              key={Math.random()}
            >
              <a href={'#task1'}>
                <img
                  className={'project-list-portfolio__img'}
                  // src={require(`/src/img/portfolio/${project}`)}
                  src={projectsImg}
                  alt={projectsImg}
                />
              </a>
            </div>
          ))}
        </div>

        <div className={'project-list-portfolio__column'}>
          {projectsColumns[1].map((projectsImg) => (
            <div
              className={'project-list-portfolio__project'}
              key={Math.random()}
            >
              <a href={'#task1'}>
                <img
                  className={'project-list-portfolio__img'}
                  // src={require(`/src/img/portfolio/${project}`)}
                  src={projectsImg}
                  alt={projectsImg}
                />
              </a>
            </div>
          ))}
        </div>

        <div className={'project-list-portfolio__column'}>
          {projectsColumns[2].map((projectsImg) => (
            <div
              className={'project-list-portfolio__project'}
              key={Math.random()}
            >
              <a href={'#task1'}>
                <img
                  className={'project-list-portfolio__img'}
                  // src={require(`/src/img/portfolio/${project}`)}
                  src={projectsImg}
                  alt={projectsImg}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ProjectList.propTypes = {
  projectsImg: PropTypes.arrayOf(PropTypes.string).isRequired,
};
