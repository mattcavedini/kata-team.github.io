import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SpinnerComponent from './SpinnerComponent';
import PersonComponent from './PersonComponent';

export default class TeamComponent extends Component {

    static get propTypes() {
        return {
            team: PropTypes.array,
        };
    }

    static get defaultProps() {
        return {
            team: [],
        };
    }

    renderItems(items) {
        return items.length > 0 ? _.map(items, (item, key) => (
            <PersonComponent key={key} item={item} />
        )) : <SpinnerComponent />;
    }

    render() {
        return (
            <div className="app--team">
                <section className="uk-section">
                    <div className="uk-container">
                        <div className="uk-child-width-1-3 uk-grid uk-text-center kt--team">
                            { this.renderItems(this.props.team) }
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}
