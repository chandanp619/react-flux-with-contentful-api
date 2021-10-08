import {createClient} from 'contentful';

class ContentFullClient{
    _SPACE_ID = process.env.SPACE_ID;
    _ACTION_TOKEN =  process.env.ACTION_TOKEN;
    _client = undefined;
    _blogs = [];

    constructor(){
        //console.log(process.env);
        this._client = createClient({
            space:this._SPACE_ID, 
            accessToken:this._ACTION_TOKEN
        });
        this.fetchBlogContent();
    }

    fetchBlogContent = ()=>{
        
       this._client.getEntries()   // {"content_type":"blog"}
        .then((entry)=>{
            this.processContent(entry);
         } )
         
         
    }

    processContent = (content)=>{
        if(this._blogs.length < content.total){
            this._blogs.push(content.items);
        }else{
            this.fetchBlogContent();
        }
    } 

    getBlogContent = ()=>{
        return this._blogs;
    }

    processBlogContent= ()=>{
        
    }
    
}

export default ContentFullClient;