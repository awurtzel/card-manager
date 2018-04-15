import React from 'react';
import {Field} from "redux-form";

const CardModifyPanel = props => {
    return (
        <div className="CardModifyPanel">
            <form id="CardModifyForm" onSubmit={props.handleSubmit}>
                <div>
                    <label>Name</label>
                    <div>
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
            </form>
        </div>
    )
};

export default CardModifyPanel;