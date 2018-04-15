import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import CardListPanel from "./CardListPanel";
import {fetchCardList} from "../ducks/card-list-duck";
import CardModifyContainer from "./CardModifyContainer";

const mapStateToProps = state => ({
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
        initialValues: {
            name: '',
            type: '',
            faction: '',
        },
    };

    static propTypes = {
        cardList: PropTypes.array,
        initialValues: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
            faction: PropTypes.string,
        }),
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
                <CardModifyContainer
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardPanel);
