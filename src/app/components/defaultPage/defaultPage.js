import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '../../components/button/button';

class defaultPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { width } = this.props;

    return (
      <div>
        { width }
        <br />
        <br />
        <Button>
          normal button
        </Button>
      </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    width: state.browser.width
  }
};

export default connect(mapStateToProps)(defaultPage);