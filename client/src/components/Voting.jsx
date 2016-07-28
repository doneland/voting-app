import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.Component {
  render() {
    return (
      <div className="voting">
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
      </div>
    );
  }
}


reactMixin(Voting.prototype, PureRenderMixin);

export default Voting;
