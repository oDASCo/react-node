import React from "react";
import { connect } from 'react-redux';
import { FIELDS } from './SurveyForm';
import _ from "lodash";
import * as actions from "../../actions";
import {surveySubmit} from "../../actions";
import { withRouter } from 'react-router';

const SurveyReview  = ({ onCancel, formValues, surveySubmit, history }) =>  {
    const reviewFields = _.map(FIELDS, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        )
    });
    return (
        <div>
           <h5>PLease confirm your entries</h5>
            {reviewFields}
            <button className="yellow btn-flat darken-3"
                    onClick={onCancel}
            >
                Back
            </button>
            <button className="teal btn-flat right white-text"
                    onClick={() => surveySubmit(formValues, history)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>

    )
};
function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
