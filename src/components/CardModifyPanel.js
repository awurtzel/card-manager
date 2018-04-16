import React from 'react';
import PropTypes from 'prop-types';
import {Field} from "redux-form";

const CardModifyPanel = props => {
    return (
        <div className="CardModifyPanel">
            <form id="CardModifyForm" onSubmit={props.handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
                        {props.initialValues.name}
                        <Field
                            id="name"
                            name="name"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Type</label>
                    <div>
                        <Field
                            id="type"
                            name="type"
                            component="input"
                            type="text"
                            placeholder="Type"
                        />
                    </div>
                </div>
                <div>
                    <label>Faction</label>
                    <div>
                        <Field
                            id="faction"
                            name="faction"
                            component="input"
                            type="text"
                            placeholder="Faction"
                        />
                    </div>
                </div>
                <div>
                    <label>Card Number</label>
                    <div>
                        <input value={props.cardNumber}/>
                    </div><label>of</label>
                    <div>
                        <label>{props.totalNumCards}</label>
                    </div>
                </div>
            </form>
        </div>
    )
};
CardModifyPanel.propTypes = {
    cardNumber: PropTypes.number,
    totalNumCards: PropTypes.number,
};

export default CardModifyPanel;