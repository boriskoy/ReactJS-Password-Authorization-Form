var React = require('react');
var ReactDOM = require('react-dom');

var Contact = React.createClass({
  getInitialState: function () {
    return {
      password: 'swordfish',
      authorized: false
    };
  },

  authorize: function (e) {
    var password = e.target.querySelector(
      'input[type="password"]').value;
    var auth = password == this.state.password;
    this.setState({
      authorized: auth,
    });
  },

  render: function () {
    var login = (
      <form onSubmit={this.authorize} action="#">
      	<input type="password" placeholder="Password"/>        
  	<button type="button" input type="submit">Submit</button>
      </form>
    );
    
    var contactInfo = (
    	<ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    
    return (
      <div id="authorization">
        <h1>Contact</h1>
        {this.state.authorized ? contactInfo : login} 
      </div>
    );
  }
});

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);