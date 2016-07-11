/**
 * Created by nicolas on 11/07/2016.
 */
module.exports = {
    BAD_PARAMETER_URL: {
        code: 1001,
        error: "Check parameter in url. It must not be null or empty"
    },
    BAD_BODY_PARAMETER: {
        code: 1002,
        error: "Check body parameter. It must not be null or empty"
    },
    PASSWORD_TOO_SHORT: {
        code: 1003,
        error: "Password is too short. Minimum : 7 characters"
    },
    EMAIL_NOT_VALID: {
        code: 1004,
        error: "Email is not valid"
    },
    FILE_NOT_UPLOAD: {
        code: 1005,
        error: "File is not upload"
    },
    OBJECT_ID_NOT_VALID: {
        code: 1006,
        error: "ID is not valid"
    },
    DATE_NOT_VALID: {
        code: 1007,
        error: "This date is not valid"
    }
};