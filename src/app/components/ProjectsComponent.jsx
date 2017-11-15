import React, { Component } from 'react';
import _ from 'lodash';
import SpinnerComponent from './SpinnerComponent';
import ProjectComponent from './ProjectComponent';
import ProjectsStore from '../stores/ProjectsStore';

export default class ProjectsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { projects: ProjectsStore.getState() };
    }

    componentDidMount() {
        this.listener = ProjectsStore.addListener(this.onProjectsStoreHandler.bind(this));
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onProjectsStoreHandler() {
        this.setState({ projects: ProjectsStore.getState() });
    }

    renderItems(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <ProjectComponent key={key} item={item} />
        )) : <SpinnerComponent />;
    }

    render() {
        return (
            <div className="app--projects">
                <section className="uk-section uk-section-over">
                    <div className="uk-container">
                        { this.renderItems(this.state.projects) }
                    </div>
                </section>
            </div>
        );
    }

}
