import React from "react";

const BlogList = (props) =>{
    
    var _blogs = props.blogs;
    //console.log(_blogs);
    const renderBlogItems = ()=>{
        
        // return props.blogs.map((item,index)=>{
        //      <div key={index}>
        //          <h2>{item.title}</h2>
        //      </div>
        //   })
        return _blogs;
    }

    return(
        <div className="blog-list">{renderBlogItems()}</div>
        
        
    )
}
export default BlogList;