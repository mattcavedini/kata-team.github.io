import React, { Component } from 'react';
import _ from 'underscore';
import Project from '../class/Project';

export default class ProjectComponent extends Component {

    static get propTypes() {
        return {
            item: React.PropTypes.instanceOf(Project),
        };
    }

    get linkWebsite() {
        return this.props.item.linkWebsite ?
            <a className="kt--project-link" target="_blank" rel="noopener noreferrer" href={this.props.item.linkWebsite}>
                <i className="fa fa-globe" aria-hidden="true"></i> <small>website</small>
            </a> : '';
    }

    get linkGithub() {
        return this.props.item.linkGithub ?
            <a className="kt--project-link" target="_blank" rel="noopener noreferrer" href={this.props.item.linkGithub}>
                <i className="fa fa-github" aria-hidden="true"></i> <small>github</small>
            </a> : '';
    }

    render() {
        return (
            <div className="kt--project">
                <div className="kt--project-box kt--project-box__1">
                    <h4>{this.props.item.title}</h4>
                    {this.linkWebsite}
                    {this.linkGithub}
                    <p>{this.props.item.description}</p>
                </div>
                <div className="kt--project-box kt--project-box__2">
                    <img className="uk-align-center" src={this.props.item.image} />
                </div>
            </div>
        );
    }

}