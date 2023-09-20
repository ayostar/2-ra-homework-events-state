import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';
import projectsScrUrl from './projects';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.state = {
      selected: this.filters[0],
    };
  }

  onSelectFilter = (filter) => {
    if (this.state.selected === filter) return;
    this.setState({ selected: filter });
  };

  getFilteredProjects = () => {
    return projectsScrUrl
      .filter((project) => {
        if (this.state.selected === 'All') return true;
        return project.category === this.state.selected;
      })
      .map((project) => project.img);
  };

  render() {
    return (
      <div className={'portfolio'}>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList
          projectsImg={this.getFilteredProjects()}
          selected={this.state.selected}
        />
      </div>
    );
  }
}
