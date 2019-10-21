import React, { Component } from 'react'
import './NotFoundPage.css'
import {Link} from 'react-router-dom'



export default class NotFoundPage extends Component {
  render() {
    return (
        
      <div className='NotFoundPage'>
        <h1 className="notfound-ecoacme-title">EcoAcme</h1>
        <div className="notfoundpage-container">
            <div className="notfoundpage-text">
            <h2>Page Not Found</h2>
            <p className="notfound-p">Uh oh, we can't seem to find the page you're looking for. Try going back to the previous page or go back to the <Link to="/">Start Page</Link></p>
            </div>
            
        </div>
      </div>
    )
  }
}