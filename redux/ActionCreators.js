'use strict'

function startFormSubmissionRequest() {
    console.log('startFormSubmissionResponse()');
    return {
        type: 'START_FORM_SUBMISSION_REQUEST'
    }
}

function sendFormSubmissionRequest(formData) {
    console.log('sendFormSubmissionRequest(formData)');
    console.log(formData);
    return {
        type: 'SEND_FORM_SUBMISSION_REQUEST'
    }
}

function getFormSubmissionResponse(response) {
    console.log('getFormSubmissionResponse(response)');
    console.log(response);
    return {
        type: 'GET_FORM_SUBMISSION_RESPONSE',
        receivedAt: Date.now()
    }
}

function getFormSubmissionError(error) {
    console.log('getFormSubmissionError(error)');
    console.log(error);
    return {
        type: 'GET_FORM_SUBMISSION_ERROR',
        receivedAt: Date.now()
    }
}

var formSubmitActionCreator = function (formData) {
    console.log('formSubmitActionCreator');
    console.log(formData);

    return function(dispatch) {
        dispatch(startFormSubmissionRequest());
        return fetch('http://localhost:8000')
        .then((response) => {
            dispatch(getFormSubmissionResponse(response))
        })
        .catch((error) => {
            dispatch(getFormSubmissionError(error))
        })
    }
}

export default {FormSubmitActionCreator: formSubmitActionCreator}