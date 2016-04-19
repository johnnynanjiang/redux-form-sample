'use strict'

import React from 'react';
import { connect } from 'react-redux'
import { Field, actions } from 'react-redux-form';

import ActionCreators from '../redux/ActionCreators'

class UserForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        let { user, dispatch } = this.props;

        // Do whatever you like in here.
        // You can use redux simple form actions such as:
        // actions.setPending('user', true);
        // actions.setValidity('user.firstName', user.firstName.length > 0);
        // actions.setSubmitted('user', true);
        // etc.

        dispatch(ActionCreators.FormSubmitActionCreator(user));
    }
    render() {
        let { user } = this.props;

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Field model="user.firstName">
                    <label>First name:</label>
                    <input type="text" />
                </Field>

                <Field model="user.lastName">
                    <label>Last name:</label>
                    <input type="text" />
                </Field>

                <button type="submit">
                    Finish registration, { user.firstName } { user.lastName }!
                </button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);