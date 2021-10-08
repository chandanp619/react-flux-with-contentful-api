import React, { useEffect, useState } from 'react';
import store_language from "../flux/store/LanguageStore";
import { getLanguage,setLanguage } from '../flux/actions/StoreActions';

const LanguageSwitcher = ()=>{
  
  useEffect(()=>{
    store_language.addChangeListener(onChangeLanguage);
    if (store_language.getLanguage().length === 0) getLanguage();
  },[])

  const onChangeLanguage = ()=>{
    //console.log("Language Changed");
  } 

  const changeLanguage = (e)=>{
      let lang_n = e.target.attributes['language'].value;
      setLanguage(lang_n);
  }

    return(
        <div className="home-body-container">
          <p><strong>Language Switcher Component Updating Store with new language:</strong></p>
          <button onClick={changeLanguage} language="en">English</button> 
          &nbsp;
          <button onClick={changeLanguage} language="de">German</button>
          
        </div>
        
    )
}

export default LanguageSwitcher;