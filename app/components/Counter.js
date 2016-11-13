// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Counter extends Component {

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          {counter}
        </div>
        <div>
          <button onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
          <button className="btn btn-large btn-succes" onClick={incrementIfOdd}>odd</button>
          <button className="btn btn-large btn-warning" onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
