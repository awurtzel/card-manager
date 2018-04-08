import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CardListPanel from "./CardListPanel";
// import CardModifyPanel from "./CardModifyPanel";
import {fetchCardList} from "../ducks/card-list-duck";

const mapStateToProps = state => ({
    cardList: state.cardList,
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
    };

    static propTypes = {
        cardList: PropTypes.array,
    };

    static mapDispatchToProps = mapDispatchToProps;

    componentWillMount() {
        this.props.resetState();
    }

    render() {
        return (
            <div className="CardPanel">
                <CardListPanel
                    cardList={this.props.cardList}
                />
                {/*<CardModifyPanel*/}
                    {/*cardList={this.props.cardList}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPanel);
