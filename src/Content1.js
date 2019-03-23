import React, { Component } from 'react';

class Content1 extends Component {

  render() {
    return (
        <div className="section1" ref={this.MyRef} style={{backgroundColor: 'blue', height: this.props.height}} onWheel={this.props.WheelPage}>
        </div>
    );
  }
}

export default Content1;
