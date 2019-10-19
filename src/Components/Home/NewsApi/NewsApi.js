
import React from 'react'

class NewsApi extends React.Component{
    state = {
        news: [],
        page: 1
    }
    componentDidMount(){
        return fetch(`http://newsapi.org/v2/top-headlines?country=us&apikey=cfe55c2703cf45e19651e57063183cec&category=health&pageSize=100`)
        .then(res=>{
            if (res.ok){
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then(newsArticle=>{
            this.setState({
                news: newsArticle,
            })
        })
        .catch(err=>{
            return err
        }) 
    }

//     handlePreviousArticles = (e)=>{
//         e.preventDefault()
//         if (this.state.page >0){ 
//        this.setState({
//            page: this.state.page-1
//        }) && fetch(`http://newsapi.org/v2/top-headlines?country=us&apikey=cfe55c2703cf45e19651e57063183cec&category=health&pageSize=5&page=${this.state.page}`)
//        .then(res=>{
//            if (res.ok){
//                return res.json();
//            }
//            throw new Error(res.statusText);
//        })
//        .then(newsArticle=>{
//            this.setState({
//                news: newsArticle,
//            })
//        })
//        .catch(err=>{
//            return err
//        })
//    }else{
//        return null
//    }
   
       
//    }
   
   
   
//    handleNextArticles = (e)=>{
//        e.preventDefault()
//        this.setState({
//            page: this.state.page+1
//        }) 
//        return fetch(`http://newsapi.org/v2/top-headlines?country=us&apikey=cfe55c2703cf45e19651e57063183cec&category=health&pageSize=5&page=${this.state.page}`)
//        .then(res=>{
//            if (res.ok){
//                return res.json();
//            }
//            throw new Error(res.statusText);
//        })
//        .then(newsArticle=>{
//            this.setState({
//                news: newsArticle,
//            })
//        })
//        .catch(err=>{
//            return err
//        })
   
       
//    }
    
    

    render(){
        return(
            <div >
                {/* <button onClick={this.handleNextArticles}>Click For More Articles</button>
            <button onClick={this.handlePreviousArticles}>Previous Articles</button> */}
                <h2 className="news-api-title">Articles About Health</h2>
                {this.state.news.articles&&this.state.news.articles.map(article=>{
                    return (
                        < div className="each-article-container">
                        <div><strong>Article Title: </strong>{article.title}}</div>
                        <div><strong>Description: </strong>{article.description}</div>
                        <a href={article.url} target="_blank">Link To Article</a>
                        </div>
                        )
                })}
                
                

           </div>
           
        )
    }
}

export default NewsApi