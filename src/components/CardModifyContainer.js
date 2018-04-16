import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CardModifyPanel from './CardModifyPanel'

class CardModifyContainer extends PureComponent {
    selectCard = cardIndex => {

    };

    handleSubmit = event => {

    };

    render() {
        return (
            <div>
                <CardModifyPanel
                  {...this.props}
                  handleSubmit={this.handleSubmit}
                  selectCard={this.selectCard}
              />
            </div>
        );
    }
}

const connectedComponent = connect()(CardModifyContainer);
const formWrapper = reduxForm({
    form: 'CardModify',
    enableReinitialize: true,
})(connectedComponent);

export default formWrapper;