const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Validate(formData, onlyThisField = null) {
    if (formData == null) {
        console.error("No data passed to validation!");
        return;
    }

    const validationResult = {
        errors: {},
        failed: false
    };

    switch (onlyThisField) {
        case "username":
            ValidateUsernameField(
                formData.username,
                validationResult
            );
            break;
        case "email":
            ValidateEmailField(
                formData.email,
                validationResult
            );
            break;
        case "password":
            ValidatePasswordField(
                formData.password,
                validationResult
            );
            break;
        case "confirmPassword":
            ValidateConfirmPasswordField(
                formData.confirmPassword,
                formData.password,
                validationResult
            );
            break;
        default:
            ValidateUsernameField(
                formData.username,
                validationResult
            );
            ValidateEmailField(
                formData.email,
                validationResult
            );
            ValidatePasswordField(
                formData.password,
                validationResult
            );
            ValidateConfirmPasswordField(
                formData.confirmPassword,
                formData.password,
                validationResult
            );
            break;
    }

    return validationResult;
}

function ValidateUsernameField(username, validationResult) {
    if (!username.trim()) {
        validationResult.errors.username = "Required";
        validationResult.failed = true;
    }
}

function ValidateEmailField(email, validationResult) {
    if (!email.trim()) {
        validationResult.errors.email = "Required";
        validationResult.failed = true;
        return;
    }
    if (!emailFormatRegex.test(email)) {
        validationResult.errors.email = "Invalid format";
        validationResult.failed = true;
    }
}

function ValidatePasswordField(password, validationResult) {
    if (!password) {
        validationResult.errors.password = "Required";
        validationResult.failed = true;
        return;
    }
    if (password.length < 6) {
        validationResult.errors.password = "Min 6 characters";
        validationResult.failed = true;
    }
}

function ValidateConfirmPasswordField(confirmPassword, password, validationResult) {
    if (!confirmPassword) {
        validationResult.errors.confirmPassword = "Required";
        validationResult.failed = true;
        return;
    }
    if (confirmPassword != password) {
        validationResult.errors.confirmPassword = "Must match password";
        validationResult.failed = true;
    }
}