import React from 'react';
import PropTypes from 'prop-types';

// class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      typing: 'this is the state typing',
      kat: 7,
      widget: 'stateless function component updater'
    }
  }
  update(e) {
    this.setState({typing: e.target.value})
  }
  render() {
    let txt = this.props.txt;

    return (
      <div>
        {/*props*/}
        <h1 className="">{txt}</h1>

        {/*setState*/}
        <input type="text"
         onChange={this.update.bind(this)} />
        <h2>{this.state.typing} - {this.state.kat} </h2>

        {/*return React.createElement('h1', null, 'hello Eggheads') // js of what the jsx does*/}

        <h2>{this.state.widget}</h2>
        <TypingWidget update={this.update.bind(this)} />
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

// stateless function component
const TypingWidget = (props) =>
  <input type="text" onChange={props.update} />

export default App