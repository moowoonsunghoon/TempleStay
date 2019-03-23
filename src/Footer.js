import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.MyRef = React.createRef()
  }

  render() {
    return (
        <div className="section3" ref={this.MyRef} style={{backgroundColor: 'green', height: this.props.height}} onWheel={this.props.WheelPage}>
        </div>
    );
  }
}

export default Footer;
