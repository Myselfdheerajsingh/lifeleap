import * as api from "../api/admin";

export const adminSignIn = (fields, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(fields);
        dispatch({ type: "SIGN_IN_ADMIN", data });
        history.push("/admin/dashboard");
    } catch (error) {
        console.log(error);
    }
};

export const adminGetDetails = (history) => async (dispatch) => {
    try {
        const { data } = await api.fetchAdmin();
        console.log("admin data in actions", data);

        // check if the response data is error
        // if yes then call dispatch logout
        // and redirect to "/"
        if (data.code === 401) {
            dispatch({ type: "LOGOUT_ADMIN" });
            history.push("/");
        } else if (data.code === 403) {
            history.goBack();
        } else {
            dispatch({ type: "FETCH_ADMIN", data });
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminGetMentorMentee = (history) => async (dispatch) => {
    try {
        const { data } = await api.fetchMentorMentee();
        console.log("Mentor Mentee data in actions", data);

        // check if the response data is error
        // if yes then call dispatch logout
        // and redirect to "/"
        if (data.code === 401) {
            dispatch({ type: "LOGOUT_ADMIN" });
            history.push("/");
        } else if (data.code === 403) {
            history.goBack();
        } else {
            dispatch({ type: "FETCH_MENTOR_MENTEE", data });
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminSaveGroup = (groupData, history) => async (dispatch) => {
    try {
        const { data } = await api.saveGroup(groupData);
        console.log("group res data in actions", data);

        // check if the response data is error
        // if yes then call dispatch logout
        // and redirect to "/"
        if (data.code === 401) {
            dispatch({ type: "LOGOUT_ADMIN" });
            history.push("/");
        } else if (data.code === 403) {
            history.goBack();
        } else {
            dispatch({ type: "FETCH_MENTOR_MENTEE", data });
        }
    } catch (error) {
        console.log(error);
    }
};

export const adminFetchLogs = (history, setlogs) => async (dispatch) => {
    try {
        const { data } = await api.fetchLogs();
        console.log("logs data in actions", data);

        // check if the response data is error
        // if yes then call dispatch logout
        // and redirect to "/"
        if (data.code === 401) {
            dispatch({ type: "LOGOUT_ADMIN" });
            history.push("/");
        } else if (data.code === 403) {
            history.goBack();
        } else {
            setlogs(data.data.logs);
        }
    } catch (error) {
        console.log(error);
    }
};
