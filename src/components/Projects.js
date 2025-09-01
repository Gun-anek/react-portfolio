import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
     if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map((project, i) => {
        return (
          <div class="code-block">
            <div class="code-header">
              <span>C#</span>
              <button class="copy-button">Copy</button>
            </div>
            <div class="code-content">  
            <h4>// {project.title}</h4>            
            <span style={{ color: "red" }}>Company: {project.company}</span><br></br>
            <span style={{ color: "white" }}>Stack: {project.technologies}</span>
            </div>
          </div>
        )
      });
    }

    return (
      
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
          </div>
          {projects}
        </div>
      </section>
    );
  }
}

export default Projects;
