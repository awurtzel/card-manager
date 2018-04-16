import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import CardModifyPanel from './CardModifyPanel'

const mapStateToProps = (state, props) => ({
    initialValues: state.cardList.cardList && state.cardList.cardList[0],
    totalNumCards: state.cardList.cardList && state.cardList.cardList.length,
});

class CardModifyContainer extends PureComponent {
    static defaultProps = {
        initialValues: {
          name: 'NAME',
          type: 'TYPE',
          faction: 'FACTION',
        },
        totalNumCards: 0,
        cardNumber: 0,
    };

    static propTypes = {
        initialValues: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
            faction: PropTypes.string,
        }),
        totalNumCards: PropTypes.number,
        cardNumber: PropTypes.number
    };

    componentWillReceiveProps(nextProps) {
        this.props.initialize(nextProps.initialValues);
    };

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

const connectedComponent = connect(
    mapStateToProps
)(CardModifyContainer);
const formWrapper = reduxForm({
    form: 'CardModify',
    enableReinitialize: true,
})(connectedComponent);

export default formWrapper;