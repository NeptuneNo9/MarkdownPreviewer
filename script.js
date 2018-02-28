const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }
  updateText(event) {
    this.setState({ markdown: event.target.value });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown</h1>
          <textarea onChange={this.updateText.bind(this)} value={this.state.markdown} rows="10" style={{width: "300"}} />
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
