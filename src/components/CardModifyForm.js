import React, {PureComponent} from 'react'
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    cardList: state.cardList
});

class CardModifyForm extends PureComponent{
    static propTypes = {
        cardList: PropTypes.array,
        modifyHandler: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
    };

    static defaultProps = {
      cardList: []
    };

    submitCreate = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.props.modifyHandler)(event);
    };

    render() {
        return (
            <form id="cardModifyForm" onSubmit={this.submitCreate}>
                <div>
                    <label>Name</label>
                    <div>
                        <Field name="name" component="input" type="text" placeholder="Name"/>
                    </div>
                </div>
                <div>
                    <label>Type</label>
                    <div>
                        <Field name="type" component="input" type="text" placeholder="Type"/>
                    </div>
                </div>
                <div>
                    <label>Faction</label>
                    <div>
                        <Field name="faction" component="input" type="text" placeholder="Faction"/>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button">Clear Values</button>
                </div>
            </form>
        )
    }
}

const WrappedCardModifyForm = connect(
    mapStateToProps
)(CardModifyForm);

export default reduxForm({
    form: 'cardModify'  // a unique identifier for this form
})(WrappedCardModifyForm)