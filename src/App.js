import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./Header";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props)
    this.MyRef = React.createRef()
    this.myref = React.createRef()
  }

  state = {
    scroll: 0,
    height: window.innerHeight,
    remotebtn: [],
    index: 0
  }

  WheelPage = (e) => {
    const {scroll, height} = this.state;
    const complete = document.getElementsByClassName(`section${this.state.index}`)[0].classList;
    const scrollDown = () => setTimeout(() => {
        document.getElementsByClassName(`section${this.state.index }`)[0].classList.add('complete')
        if (this.state.index === 0) {
          return
        }else {
          document.getElementsByClassName(`section${this.state.index - 1}`)[0].classList.remove('complete')
        }
      }, 700);
    const scrollUp = () => setTimeout(() => {
      document.getElementsByClassName(`section${this.state.index }`)[0].classList.add('complete')
      document.getElementsByClassName(`section${this.state.index + 1}`)[0].classList.remove('complete')
    }, 700);
    if (e.deltaY > 0 && scroll <= 0) {
      this.setState({
        scroll: height,
        index: 1
      })
      scrollDown();
    } else if(e.deltaY > 0 && scroll > 0 && complete[1] === 'complete'){
      if (scroll === this.MyRef.current.MyRef.current.offsetTop) {
        return
      }else{
        this.setState({
          scroll: scroll + height,
          index: this.state.index + 1
        })
        scrollDown();
      }
    } else if(e.deltaY < 0 && scroll > 0 && complete[1] === 'complete'){
        this.setState({
          scroll: scroll - height,
          index: this.state.index - 1
      })
      scrollUp();
    }
  }

  handleAction = (i) => {
    const buttonClick = () => {setTimeout(() => {
      document.getElementsByClassName(`section${this.state.index }`)[0].classList.add('complete')
      }, 700);
      document.getElementsByClassName(`complete`)[0].classList.remove('complete')
    }
    this.setState({
      scroll: this.MyRef.current.MyRef.current.scrollHeight * i,
      index: i
    })
    buttonClick()
  }

  resize = () => {
    this.setState({
      height: window.innerHeight
    })
  }

  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0,0);
    };
    window.addEventListener("resize", this.resize);
    let remotebtn = [];
    for (let i = 0; i < this.myref.current.children.length; i++) {
      remotebtn.push(i)
    } 
    this.setState({
      remotebtn: remotebtn
    })
    document.getElementsByClassName('section0')[0].classList.add('complete')
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(document.getElementsByClassName(`section1`)[0].classList)
    //그냥방식
    /*  window.scrollTo({
        top: this.state.scroll,
        behavior: 'smooth'
      })
    */
      //fullpage 방식
      const styles = `height: 100%;
      position: relative;
      touch-action: none;
      transform: translate3d(0px, ${this.state.scroll * -1 + 'px'}, 0px);
      transition: all 700ms ease 0s;`
      document.body.getElementsByClassName('App')[0].style = styles
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    const remoteBtn = this.state.remotebtn.map(i => {
      const btn = <li key={i}><span className={this.state.index === i ? "remotebtn active" : 'remotebtn'} onClick={() => this.handleAction(i)}></span></li>
      return btn
    })
    return (
      <Fragment>
        <div ref={this.myref} className="App">
          <Header WheelPage={this.WheelPage} height={this.state.height} />
          <Content1 WheelPage={this.WheelPage} height={this.state.height} />
          <Content2 WheelPage={this.WheelPage} height={this.state.height} />
          <Footer WheelPage={this.WheelPage} height={this.state.height} ref={this.MyRef} />
        </div>
        <div className="remote">
        <ul>
          {remoteBtn ? remoteBtn : null}
        </ul>
      </div>
    </Fragment>
    );
  }
}

export default App;
