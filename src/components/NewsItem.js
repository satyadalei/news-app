import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img srcSet={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">
                               {description}...
                            </p>
                            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </>
        )
    }
}

export default NewsItem