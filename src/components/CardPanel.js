import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CardListPanel from "./CardListPanel";
import {fetchCardList} from "../ducks/card-list-duck";
import CardModifyContainer from "./CardModifyContainer";

const mapStateToProps = (state, props) => ({
    cardList: state.cardList.cardList,
    initialValues: {
        name: state.cardList.cardList && state.cardList.cardList[0] && state.cardList.cardList[0].name,
        type: state.cardList.cardList && state.cardList.cardList[0] && state.cardList.cardList[0].type,
        faction: state.cardList.cardList && state.cardList.cardList[0] && state.cardList.cardList[0].faction,
        number: 0,
        totalNum: state.cardList.cardList && state.cardList.cardList.length
    }
});

const mapDispatchToProps = dispatch => ({
    fetchCardList: () => {
      dispatch(fetchCardList());
    },
    resetState: () => {
      dispatch(fetchCardList());
    },
});

class CardPanel extends PureComponent {
    static defaultProps = {
        cardList: [],
        initialValues: {
            name: '',
            type: '',
            faction: '',
            number: 0,
            totalNum: 0,
        },
    };

    static propTypes = {
        cardList: PropTypes.array,
        initialValues: {
            name: PropTypes.string,
            type: PropTypes.string,
            faction: PropTypes.string,
            number: PropTypes.number,
            totalNum: PropTypes.number,
        },
    };

    static mapDispatchToProps = mapDispatchToProps;

    cardSelected = cardIndex => {

    };

    componentWillMount() {
        this.props.resetState();
    }

    render() {
        return (
            <div className="CardPanel">
                <CardListPanel
                    cardList={this.props.cardList}
                />
                <CardModifyContainer
                    initialValues={this.props.initialValues}
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
