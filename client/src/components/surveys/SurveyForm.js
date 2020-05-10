import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { reduxForm, Field }  from 'redux-form';
import SurveyField from "./SurveyField";
import _ from 'lodash';
import validateEmails from "../../utils/validateEmails";

export const  FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Survey Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipients List", name: "recipients"}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field
                key={name}
                name={name}
                type="text"
                component={SurveyField}
                label={label}
            />
            });

    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys"
                            className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit"
                            className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
     const errors = {};

    errors.recipients = validateEmails(values.recipients || '');
    _.each(FIELDS, ({name}) => {
        if (!values[name]) {
            errors[name] = `You  must provide a ${name}!`;
        }
    });

     return errors;
}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);
