import React, { Component } from 'react';

class ProjectRow extends Component {
  render() {
    return(
      <div className="row">

        <div className="projectImage">
          <a class="link-class" href={this.props.url} target="_blank" title={this.props.url_title}>
            <img alt={this.props.img_alt} src={this.props.img_path}/>
            <div class="overlay">
              <h5 className="project-title">{this.props.img_title}</h5>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </div>
          </a>
        </div>
        <div className="projectDesc">
          <h2>
            {this.props.project_title}
          </h2>
          {this.props.project_desc}
        </div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <section id="projects">

      <div>
        <h1>Projects</h1>
      </div>

      <ProjectRow
        url="https://electionlab.mit.edu/"
        url_title="MEDSL"
        img_alt="MEDSL"
        img_path="images/MEDSL.png"
        img_title="MEDSL"
        project_title="Elections Performance Index"
        project_desc=
          <p>
            The Elections Performance Index is a assessment tool for evaluating
            election administration at the state level. It draws upon data from
            several indicators to identify potential problem areas and to
            highlight trends in election policy.
          </p>
      />

      <ProjectRow
        url="https://www.reddit.com/user/UnexpectedHaikuBot/comments/"
        url_title="UnexpectedHaikuBot"
        img_alt="HaikuBot"
        img_path="images/haikubot.png"
        img_title="Reddit Haiku Bot"
        project_title="Reddit Haiku Bot"
        project_desc=
          <p>
            Built using the PRAW API, u/UnexpectedHaikuBot is a Reddit bot that
            parses Reddit comments into haiku.
          </p>
      />

    </section>
    );
  }
}

export default Projects
