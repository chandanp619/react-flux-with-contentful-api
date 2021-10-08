import { EventEmitter } from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../action-types/actionTypes";

const CHANGE_EVENT = "onChangeLanguage";
var _language = "en";

class LanguageStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getLanguage() {
        if(_language==="") _language = "en";
        return _language;
    }

}

const store_language = new LanguageStore();
store_language.setMaxListeners(50);

AppDispatcher.register((action) => {
    //console.log(action);
    switch (action.actionTypes) {
        case actionTypes.GET_LANG:
            _language = action.language;
            store_language.emitChange();
            //console.log("eeeee:"+_language);
            break;
        case actionTypes.SET_LANG:
            _language = action.language;
            store_language.emitChange();
            
            break;    
        default:
    }
});

export default store_language;