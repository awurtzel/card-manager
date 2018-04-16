import cardsStubData from "../cardsStubData";

const defaultState = {
    cardList: [],
    currCardNumber: 0,
};

export const actions = {
    SET_CARD_LIST: 'SET_CARD_LIST',
    SET_CURR_CARD_NUMBER: 'SET_CURR_CARD_NUMBER',
};

const USE_STUB_DATA = true;

function fetchStubCardList() {
    return (dispatch) => {
        dispatch(receiveCardList(cardsStubData.data))
    };
}

const fetchServiceCardList = () => {
    return (dispatch) => {
        fetch('https://api.myjson.com/bins/18y6bb')
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            }))
        )
        .then(response => {
            if (response.status === 200) {
                dispatch(receiveCardList(response.data))
            } else {
                const flash = {
                    type: 'error',
                    title: 'Error getting task list',
                    content: 'There was an error getting the task list. Please try again.'
                };
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        });
    };
};

export function fetchCardList() {
    if(USE_STUB_DATA) {
        return fetchStubCardList();
    } else {
        return fetchServiceCardList();
    }
}

export function receiveCardList(data) {
    return {
        type: actions.SET_CARD_LIST,
        payload: data.cardList,
    };
}

export function setCurrCardNumber(data) {
    return {
        type: actions.SET_CURR_CARD_NUMBER,
        payload: data,
    };
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SET_CARD_LIST: {
            return {
                ...state,
                cardList: action.payload
            };
        }
        case actions.SET_CURR_CARD_NUMBER: {
            return {
                ...state,
                currCardNumber: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default {
    fetchCardList, setCurrCardNumber, actions,
};