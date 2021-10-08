import React, { useEffect, useState } from "react";
import { getLanguage } from "../flux/actions/StoreActions";
import store_language from "../flux/store/LanguageStore";

const Header = ()=>{
  const [lang,setLang]  = useState(store_language.getLanguage());
  

  useEffect(()=>{
    store_language.addChangeListener(onChangeLanguage);
     if (store_language.getLanguage().length === 0) getLanguage();
     setLang(store_language.getLanguage());
  });

  const onChangeLanguage = ()=>{
    setLang(store_language.getLanguage());
  }

  

    return(
        <div className="header">
            <p><strong>Header Component subscribing to store and display the current language:</strong></p>
            
        <p>Language : {lang}</p>
      </div>
    )
}
export default Header;