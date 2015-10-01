'use strict';

var React = require('react/addons');


var Flash = React.createClass({
  propTypes: {
    messageHeader: React.PropTypes.string.isRequired,
    messageBody: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    hidden: React.PropTypes.bool
  },
  
  getDefaultProps: function () {
    return {
      messageHeader: 'Hey Buddy! ',
      messageBody: 'This is to info U!',
      type: 'Info', // 1.Info 2.Danger 3.Success 4.Warning
      hidden: false
    };
  },
  
  getInitialState: function () {
    return {
      style: 'alert info',
          };
  },
  
  render: function () {
    var _style = "";
    if(this.props.hidden){
      _style = "hidden";
    } else {  
      switch (this.props.type) {
        case "Danger":
          _style = "alert danger"
        break;
        case "Success":
          _style = "alert success"
          break;
        case "Warning":
          _style = "alert warning"
          break;
        case "Info":
          // Intentional fall through
        default:
          _style = "alert info"
      }
    }
    return ( <div className = {_style}>
                <p className = "text-center">
                  <strong>{this.props.messageHeader} </strong>
                  {this.props.messageBody}
                </p>
             </div>
           );
  }
  
});

var FlashMessage = React.createClass({
  

  getInitialState: function () {
    return  {
              hide: false,
              time: false
            };
  },

  _onTimeout: function () {
    this.setState(
      {
        hide: true,
        time : true
      });
  },

  componentWillReceiveProps: function () {
    // Setting the hide and time flag to default
    this.setState(
      { 
        hide: false,
        time : false
      });
  },
  
  render: function () {
    
    if(this.props.hidden){
      return null;
    } else {
      
        // If autoDismiss is set to true start the timer
      
        if(this.props.autoDismiss){
          var time = setTimeout(this._onTimeout,this.props.timeout);
          if(this.state.time === true){
            clearTimeout(time); // Clearing timeout
          }
        }
        return ( <Flash 
                    messageHeader = {this.props.messageHeader}
                    messageBody = {this.props.messageBody}
                    type = {this.props.type}
                    hidden = {this.state.hide}
                 />
               );
    }
  }
});

module.exports = FlashMessage;