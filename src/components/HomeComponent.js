
import React, { Fragment, useEffect, useState } from 'react';
import BlogList from './BlogList';
import Header from './Header';
import LanguageSwitcher from './LanguageSwitcher';



const HomeComponent = (props)=>{
  var data = props.data;
  
  useEffect(()=>{
    
},[]);


  return(
    <Fragment>
      <h2> Flux Basics </h2>
      <Header />
      <LanguageSwitcher />
      <BlogList blogs={data.content} />
    </Fragment>
  )
}
export default HomeComponent;