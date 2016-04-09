'use stric'

var formSubmitActionCreator = function (formData) {
    console.log('formSubmitActionCreator');

    return function(dispatch) {
        setTimeout(function() {
            console.log("async action dispatching, formData is:");
            console.log(formData);
            dispatch({
                type: 'formSubmit',
                formData
            })
        }, 5000)
    }
}

export default {FormSubmitActionCreator: formSubmitActionCreator}