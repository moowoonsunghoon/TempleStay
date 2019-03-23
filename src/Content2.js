import React, { Component } from 'react';

class Content2 extends Component {

  render() {
    return (
        <div className="section2" ref={this.MyRef} style={{backgroundColor: 'black', height: this.props.height}} onWheel={this.props.WheelPage}>
        </div>
    );
  }
}

export default Content2;
