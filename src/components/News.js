import React, { Component } from "react";
import NewsItem from "./NewsItem";
import _, { toNumber } from "lodash";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize : 10,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize :PropTypes.number,
    category : PropTypes.string
  }

  articles = []
  // articles = [
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "India.com"
  //     },
  //     "author": "Zee Media Bureau",
  //     "title": "LIVE Updates | RCB vs MI, IPL 2023 Cricket Live Score: Toss To Take Place At 7 PM IST - Zee News",
  //     "description": "LIVE Updates | RCB vs MI, IPL 2023 Cricket Live Score: Toss To Take Place At 7 PM IST",
  //     "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-rcb-vs-mi-2023-match-no-5-royal-challengers-bangalore-vs-mumbai-indians-indian-premier-league-m-chinnaswamy-stadium-bengaluru-faf-du-plessis-rohit-sharma-2590381",
  //     "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/04/02/1177222-whatsapp-image-2023-03-31-at-12.17.54-pm.jpeg",
  //     "publishedAt": "2023-04-02T12:12:12Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NDTV News"
  //     },
  //     "author": null,
  //     "title": "'Nitish Kumar Can't Be Prime Minister Because...': Amit Shah's Taunt In Bihar - NDTV",
  //     "description": "Home Minister Amit Shah, on a visit to Bihar today, took on former ally Nitish Kumar over his alleged ambition for the country's top post.",
  //     "url": "https://www.ndtv.com/india-news/nitish-kumar-cant-be-prime-minister-because-amit-shahs-taunt-in-bihar-3914197",
  //     "urlToImage": "https://c.ndtvimg.com/2023-04/ksevuuko_amit-shah-in-bihar_625x300_02_April_23.jpg",
  //     "publishedAt": "2023-04-02T12:02:39Z",
  //     "content": "Amit Shah took a swipe at Nitish Kumar and Tejashwi Yadav Patna: Home Minister Amit Shah, on a visit to Bihar today, took on former ally Nitish Kumar over his alleged ambition for the country's top … [+1828 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NDTV News"
  //     },
  //     "author": null,
  //     "title": "Rahul Gandhi To Challenge Conviction In Defamation Case Tomorrow: Sources - NDTV",
  //     "description": "Congress leader Rahul Gandhi, recently disqualified from the Parliament after being sentenced to two years in prison over a 2019 defamation case, will challenge his conviction and sentencing in the Surat sessions court tomorrow, sources said.",
  //     "url": "https://www.ndtv.com/india-news/rahul-gandhi-to-move-surat-court-tomorrow-against-conviction-and-two-year-sentence-in-defamation-case-sources-3913307",
  //     "urlToImage": "https://c.ndtvimg.com/2023-03/a9svegvg_rahul-gandhi_625x300_26_March_23.jpg",
  //     "publishedAt": "2023-04-02T11:00:00Z",
  //     "content": "He also asked for an interim stay on the conviction till the matter is disposed of. New Delhi: Congress leader Rahul Gandhi, recently disqualified from the Parliament after being sentenced to two ye… [+3637 chars]"
  //   }
  // ]

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 0,
    }
  }
  async componentDidMount() {
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e42b43e0f0744fbbeb31045df82eb00&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page ,  //page: this.state.page - 1
      loading : false,
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })
  };
  handlePrevClick = async () => {
    this.setState({
      loading : true,
      articles : []
     });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e42b43e0f0744fbbeb31045df82eb00&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles })
    this.setState({
      page: this.state.page - 1,
      articles : parseData.articles,
      loading : false,
    });
       let allPageNavigator = document.getElementsByClassName("page-navigator");
      for (let i = 0; i < allPageNavigator.length; i++) {
        allPageNavigator[i].classList.remove("active");
      }
      let activePageNavigator = document.getElementById(`page-${(this.state.page)-1}`);
      activePageNavigator.classList.add("active");
      console.log(this.state.page - 1);
  }
   
   handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
      //or you can disable the button
    } else {
      this.setState({
        loading : true,
        articles : []
       });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e42b43e0f0744fbbeb31045df82eb00&page=${(this.state.page)+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading : false
      });
      let allPageNavigator = document.getElementsByClassName("page-navigator");
      for (let i = 0; i < allPageNavigator.length; i++) {
        allPageNavigator[i].classList.remove("active");
      }
      let activePageNavigator = document.getElementById(`page-${(this.state.page)+1}`);
      activePageNavigator.classList.add("active");
      console.log(this.state.page + 1);
    }
  }
     visitClickedPage = async (event)=>{
     let pageNo = toNumber(event.target.value) ;
     this.setState({
      loading : true,
      articles : []
     });
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e42b43e0f0744fbbeb31045df82eb00&page=${pageNo}&pageSize=${this.props.pageSize}`;
     let data = await fetch(url);
     let parseData = await data.json();
     this.setState({ articles: parseData.articles });
     this.setState({
       page: pageNo,
       loading : false,
       articles : parseData.articles
     });
      
      let allPageNavigator = document.getElementsByClassName("page-navigator");
      for (let i = 0; i < allPageNavigator.length; i++) {
        allPageNavigator[i].classList.remove("active");
      }
      let activePageNavigator = document.getElementById(`page-${pageNo}`);
      activePageNavigator.classList.add("active");
  }
  

  
  render() {
    return (
      <>
      {this.state.loading && <Loader/>}
        <div className="container" style={{minHeight:"75vh"}} >
        {!this.state.loading ? <h2 className="text-center" >Top Headlines</h2> : " " }
          {/* --------------Populating News--------------------------------- */}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title != null ? element.title.slice(0, 40) : " "}
                    description={element.description != null ? element.description.slice(0, 60) : " "}
                    imageUrl={element.urlToImage != null ? element.urlToImage : ("https://www.the-sun.com/wp-content/uploads/sites/6/2020/07/NINTCHDBPICT000595383181-2.jpg?strip=all&quality=100&w=1920&h=1080&crop=1")}
                    newsUrl={element.url}
                  />
                </div>
              )
            })}
          </div>
        </div>
        {/* ---------------------- This is page navigation section -------------------------- */}
        <div style={{marginBottom:"0"}} className="container d-flex justify-content-between align-items-center my-4">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">Prev</button>

          <nav className="d-flex justify-content-center align-items-center" aria-label="Page navigation example">
            <ul style={{ marginTop: "unset", marginBottom: "unset" }} className="pagination">
              <li className="page-item"><button onClick={this.visitClickedPage} value={1} id="page-1" className="active page-link page-navigator">{1}</button></li>
              {
                Math.ceil(this.state.totalResults / this.props.pageSize) > 1 ?  
                  (_.times(Math.ceil(this.state.totalResults / this.props.pageSize) - 1, (i) => (
                      <li key={i} className="page-item"><button id={`page-${i+2}`} onClick= {this.visitClickedPage} value={i+2} className="page-link page-navigator">{i+2}</button></li>
                    ))
                  )
                 :(<li className="page-item"><button className="page-link" style={{pointerEvents: "none"}}>No More Pages</button></li>)
              }
            </ul>
          </nav>
          <button disabled={toNumber(this.state.page) + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next</button>
        </div>
      </>
    );
  }
}

export default News;
