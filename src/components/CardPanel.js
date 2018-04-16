import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CardListPanel from "./CardListPanel";
import {fetchCardList} from "../ducks/card-list-duck";
import CardModifyContainer from "./CardModifyContainer";

const mapStateToProps = (state, props) => ({
    cardList: state.cardList.cardList,
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
                <CardModifyContainer />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPanel);
