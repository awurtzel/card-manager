import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CardModifyPanel from './CardModifyPanel'

class CardModifyContainer extends PureComponent {
    static defaultProps = {
        totalNumCards: 0,
        currCardNumber: 0,
        cardSelected: null,
    };

    static propTypes = {
        totalNumCards: PropTypes.number,
        currCardNumber: PropTypes.number,
        cardSelected: PropTypes.func,
    };

    cardSelected = (event) => {
        this.props.cardSelected(event);
    };

    handleSubmit = event => {

    };

    render() {
        return (
            <div>
                <CardModifyPanel
                  {...this.props}
                  handleSubmit={this.handleSubmit}
                  cardSelected={this.cardSelected}
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