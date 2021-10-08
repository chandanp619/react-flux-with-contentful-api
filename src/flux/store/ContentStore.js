import { EventEmitter } from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import actionTypes from "../action-types/actionTypes";
import ContentFullClient from '../../services/ContentFullClient';
const GET_CONTENTFUL = "onGetContentful";


var _content = [];



class ContentfulStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(GET_CONTENTFUL, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(GET_CONTENTFUL, callback);
    }

    emitChange() {
        this.emit(GET_CONTENTFUL);
    }

    getContentful() {
       // calling the contentful api
        var contentfulclient = new ContentFullClient();
        var contentfuldata = contentfulclient.getBlogContent();
                
        _content = contentfuldata;
        return _content;    
            
    }
    
}

const store_content = new ContentfulStore();

AppDispatcher.register((action) => {
    //console.log(action);
    switch (action.actionTypes) {
        case actionTypes.GET_CONTENTFUL:
            _content = action.content;
            store_content.emitChange();
            break;
           
        default:
    }
});

export default store_content;