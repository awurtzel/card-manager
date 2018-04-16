import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CardListPanel from "./CardListPanel";
import {fetchCardList, setCurrCardNumber} from "../ducks/card-list-duck";
import CardModifyContainer from "./CardModifyContainer";

const mapStateToProps = (state, props) => ({
    cardList: state.cardList.cardList,
    currCardNumber: state.cardList.currCardNumber,
});

const mapDispatchToProps = dispatch => ({
    fetchCardList: () => {
        dispatch(fetchCardList());
    },
    resetState: () => {
        dispatch(fetchCardList());
    },
    setCurrCardNumber: (cardNumber) => {
        dispatch(setCurrCardNumber(cardNumber));
    },
});

let currCardNumber = 0;

class CardPanel extends PureComponent {
    static defaultProps = {
        cardList: [],
        currCardNumber: 0,
    };

    static propTypes = {
        cardList: PropTypes.array,
        currCardNumber: PropTypes.number,
    };

    static mapDispatchToProps = mapDispatchToProps;

    cardSelected = (event) => {
        this.props.setCurrCardNumber(parseInt(event.target.value));
    };

    componentWillMount() {
        this.props.resetState();
    }

    render() {
        const initialValues = this.props.cardList[this.props.currCardNumber];
        return (
            <div className="CardPanel">
                <CardListPanel
                    cardList={this.props.cardList}
                />
                <CardModifyContainer
                    initialValues={initialValues}
                    currCardNumber={this.props.currCardNumber}
                    totalNumCards={this.props.cardList.length}
                    cardSelected={this.cardSelected}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPanel);
