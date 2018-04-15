import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CardListPanel extends PureComponent {
    static defaultProps = {
        cardList: [],
    };

    static propTypes = {
        cardList: PropTypes.array,
    };

    render() {
        return (
            <div className="CardListPanel">
                Card List:
                {
                    this.props.cardList.map((item, index) => {
                        return (
                            <div key={item.id}>
                                Name: '{item.name}', Type: {item.type}, Faction: '{item.faction}'
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default CardListPanel;