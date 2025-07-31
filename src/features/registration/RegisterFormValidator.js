const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Validate(formData, onlyThisField = null) {
    if (formData == null) {
        console.error("No data passed to validation!");
        return;
    }
    const errors = {};

    switch (onlyThisField) {
        case "username":
            ValidateUsernameField(
                formData.username,
                errors
            );
            break;
        case "email":
            ValidateEmailField(
                formData.email,
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
            ValidateEmailField(
                formData.email,
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

function ValidateEmailField(email, errors) {
    if (!email.trim()) {
        errors.email = "Required";
        return;
    }
    if (!emailFormatRegex.test(email)) errors.email = "Invalid format";
}

function ValidatePasswordField(password, errors) {
    if (!password) {
        errors.password = "Required";
        return;
    }
    if (password.length < 6) errors.password = "Min 6 characters";
}

function ValidateConfirmPasswordField(confirmPassword, password, errors) {
    if (!confirmPassword) {
        errors.confirmPassword = "Required";
        return;
    }
    if (confirmPassword != password) errors.confirmPassword = "Must match password";
}