'use stric'

var formSubmitActionCreator = function (formData) {
    console.log('formSubmitActionCreator');
    console.log(formData);
    return {
        type: 'formSubmit',
        formData
    }
}

export default {FormSubmitActionCreator: formSubmitActionCreator}