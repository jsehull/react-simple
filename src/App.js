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

        {/*statless*/}
        <h2>{this.state.widget}</h2>
        <TypingWidget update={this.update.bind(this)} />

        <div>
          <Button>I <Heart /> React</Button>
        </div>

        <Title text="123456" />
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


// props of nested children
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

// custom validation beyond `.isRequired`
const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if(props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  }
}

export default App