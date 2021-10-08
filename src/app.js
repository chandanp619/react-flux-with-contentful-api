import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';

import store_content from './flux/store/ContentStore';
import store_language from "./flux/store/LanguageStore";
import { getLanguage,setLanguage, getContentful } from "./flux/actions/StoreActions";

const App = ()=>{
    const [data,setData] = useState([]);
    var dataAll = {
        language:"",
        content:[]
    };   
   
useEffect(()=>{
    
    store_content.addChangeListener(onGetContentful);
    if (store_content.getContentful().length === 0) getContentful();
    

     store_language.addChangeListener(onChangeLanguage);
     if (store_language.getLanguage().length === 0) getLanguage();
    
    
    setData(dataAll);   
    
    return function Clean(){
        store_language.removeChangeListener(onChangeLanguage);
        store_content.removeChangeListener(onGetContentful);
    }

   
},[]);

const onChangeLanguage = ()=>{
    //console.log(store_language.getLanguage());
    dataAll.language = store_language.getLanguage();
    dataAll.content = store_content.getContentful();
    setData(dataAll);
  } 

const onGetContentful = ()=>{
    dataAll.content = store_content.getContentful();
    dataAll.language = store_language.getLanguage();
    setData(dataAll);
} 

    return(
            <React.StrictMode>
                <div className="app-container">
                <Router>
                    <Route path="/">
                        <HomeComponent data={data} />
                    </Route>
                </Router>
                </div>
            </React.StrictMode>
            
            
    )
}
export default App;