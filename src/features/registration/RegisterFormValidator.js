export function Validate(formData, onlyThisField = null) {
    if (formData == null) {
        console.error("No data passed to validation!");
        return;
    }
    const errors = [];

    switch (onlyThisField) {
        case "username":
            ValidateUsernameField(
                formData.username,
                errors
            );
            break;
        case "password":
            ValidatePasswordField(
                formData.password,
                errors
            );
            break;
        case "confirmPassword":
            ValidateConfirmPasswordField(
                formData.confirmPassword,
                formData.password,
                errors
            );
            break;
        default:
            ValidateUsernameField(
                formData.username,
                errors
            );
            ValidatePasswordField(
                formData.password,
                errors
            );
            ValidateConfirmPasswordField(
                formData.confirmPassword,
                formData.password,
                errors
            );
            break;
    }

    return errors;
}

function ValidateUsernameField(username, errors) {
    if (!username.trim()) errors.username = "Required";
}

function ValidatePasswordField(password, errors) {
    if (!password) {
        errors.password = "Required";
    }
    else if (password.length < 6) {
        errors.password = "Min 6 characters";
    }
}

function ValidateConfirmPasswordField(confirmPassword, password, errors) {
    if (!confirmPassword) {
        errors.confirmPassword = "Required";
    }
    else if (confirmPassword != password) {
        errors.confirmPassword = "Must match password";
    }
}