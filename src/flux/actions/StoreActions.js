import dispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../action-types/actionTypes";


export function getLanguage() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_LANG,
        language: "",  // set the default value here
    });
}

export function setLanguage(lang) {
    
    dispatcher.dispatch({
        actionTypes: actionTypes.SET_LANG,
        language: lang,
    });
}

export function getContentful() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_CONTENTFUL,
        contentful: [],  // set the default value here
    });
}