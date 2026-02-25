import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {   
    
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        console.log("CDM");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d77ef5da4e346db8f658997cdd474e6";
        let data =await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsSquirrel - Top Headlines</h2>
      
            <div className='row'>
                  {this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                    <NewsItems  title={element.title?element.title.slice(0,38):"No Title"} description={element.description?element.description.slice(0,88):"No Description"} urlToImage={element.urlToImage} newsUrl={element.url}/>
                </div>
                  })}
                
                
            </div>
        
      </div>
    )
  }
}
export default News