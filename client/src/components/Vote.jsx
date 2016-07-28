import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';


class Vote extends React.Component {

  constructor(props) {
    super(props);
    this.getPair = this.getPair.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.hasVotedFor = this.hasVotedFor.bind(this);
  }

  getPair() {
    return this.props.pair;
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry => {
          return <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}>
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        })}
      </div>
    );
  }
}


reactMixin(Vote.prototype, PureRenderMixin);


export default Vote;
