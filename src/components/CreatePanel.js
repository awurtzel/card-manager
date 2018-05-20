import React, { PureComponent } from 'react';
import CardModifyContainer from "./CardModifyContainer";

class CreatePanel extends PureComponent {
    render() {
        return (
            <div className="CreatePanel">
                <CardModifyContainer />
            </div>
        );
    }
}

export default CreatePanel;
