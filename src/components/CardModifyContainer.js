import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CardModifyPanel from './CardModifyPanel'

class CardModifyContainer extends PureComponent {
    handleSubmit = event => {

    };

    render() {
        return (
          <CardModifyPanel
              {...this.props}
              handleSubmit={this.handleSubmit}
          />
        );
    }
}

const connectedComponent = connect()(CardModifyContainer);
const formWrapper = reduxForm({
    form: 'CardModify',
    enableReinitialize: true,
})(connectedComponent);

export default formWrapper;