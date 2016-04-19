'use strict'

import React from 'react';
import { connect } from 'react-redux'
import { Field, actions, getField } from 'react-redux-form';

import ActionCreators from '../redux/ActionCreators'

class UserForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        let { user, dispatch } = this.props;

        dispatch(ActionCreators.FormSubmitActionCreator(user));
    }

    render() {
        let { user, userForm, dispatch } = this.props;
        console.log('this.props');
        console.log(this.props);

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Field model="user.firstName"
                   validators={{
                    match: (val) => { val.trim().length > 0; }
                   }}
                   validateOn="blur"
                >
                    <label>First name:</label>
                    <input type="text" />

                    { getField(userForm, 'firstName').errors.match && <div>Firstname is empty.</div> }
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