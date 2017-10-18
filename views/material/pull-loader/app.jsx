import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ReactPullLoad,{ STATS } from '../home/components/pull-loader'
// import ReactPullLoad,{ STATS } from 'react-pullload'
import './app.less'

const loadMoreLimitNum = 5;

const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]


class App extends Component{
  constructor(){
    super();
    this.state ={
      hasMore: true,
      data: cData,
      action: STATS.init,
      index: loadMoreLimitNum //loading more test time limit
    }
  }

  handleAction = (action) => {
    console.info(action, this.state.action,action === this.state.action);
    //new action must do not equel to old action
    if(action === this.state.action){
      return false
    }

    if(action === STATS.refreshing){//刷新
      this.handRefreshing();
    } else if(action === STATS.loading){//加载更多
      this.handLoadMore();
    } else{
      //DO NOT modify below code
      this.setState({
        action: action
      })
    }
  }

  handRefreshing = () =>{
    if(STATS.refreshing === this.state.action){
      return false
    }

    // 模拟数据请求异步操作
    setTimeout(()=>{
      //refreshing complete
      this.setState({
        data: cData,
        hasMore: true,
        action: STATS.refreshed,
        index: loadMoreLimitNum
      });
    }, 3000)

    this.setState({
      action: STATS.refreshing
    })
  }

  handLoadMore = () => {
    if(STATS.loading === this.state.action){
      return false;
    }
    //无更多内容则不执行后面逻辑
    if(!this.state.hasMore){
      return;
    }

    // 模拟数据请求异步操作
    setTimeout(()=>{
      if(this.state.index === 0){
        this.setState({
          action: STATS.reset,
          hasMore: false
        });
      } else{
        this.setState({
          data: [...this.state.data, cData[0]],
          action: STATS.reset,
          index: this.state.index - 1
        });
      }
    }, 3000)

    this.setState({
      action: STATS.loading
    })
  }

  render(){
    const {
      data,
      hasMore
    } = this.state

    const styles = {
        fixHeaderStyle: {
            position: "fixed",
            width: "100%",
            height: "50px",
            color: "#fff",
            lineHeight: "50px",
            backgroundColor: "#e24f37",
            left: 0,
            top: 0,
            textAlign: "center",
            zIndex: 1
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        button: {
            display: 'inline-block',
            fontWeight: 500,
            textAlign: 'center',
            touchAction: 'manipulation',
            cursor: 'pointer',
            backgroundImage: 'none',
            border: '1px solid transparent',
            whiteSpace: 'nowrap',
            lineHeight: 1.5,
            padding: '4px 15px',
            fontSize: '12px',
            borderRadius: '4px',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            WebkitTransition: 'all .3s cubic-bezier(.645,.045,.355,1)',
            transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
            position: 'relative',
            color: 'rgba(0,0,0,.65)',
            backgroundColor: '#fff',
            borderColor: '#d9d9d9',
            outline: 0,
            marginRight: '8px',
            marginBottom: '12px',
            marginTop: '12px',
            WebkitAppearance: 'button',
            boxSizing: 'border-box',
        },
        li: {
            fontSize: '20px',
            width: '100%',
            listStyle: 'none',
        },
        img: {
            width: '100%'
        }
    }

    return (
      <div>
        <div style={styles.fixHeaderStyle}>
          fixed header
        </div>
        <ReactPullLoad
          downEnough={150}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          style={{paddingTop: 50}}
          distanceBottom={1000}>
          <ul className="test-ul" style={styles.ul}>
            <button style={styles.button} onClick={this.handRefreshing}>refreshing</button>
            <button style={styles.button} onClick={this.handLoadMore}>loading more</button>
            {
              data.map( (str, index )=>{
                return <li style={styles.li} key={index}><img style={styles.img} src={str} alt=""/></li>
              })
            }
          </ul>
        </ReactPullLoad>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
