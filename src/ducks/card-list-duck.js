import cardsStubData from "../cardsStubData";

const defaultState = {
    cardList: [],
};

export const actions = {
    SET_CARD_LIST: 'SET_CARD_LIST',
};

const USE_STUB_DATA = true;

function fetchStubCardList() {
    return (dispatch) => {
        fetch('https://api.myjson.com/bins/18y6bb')
        .then(response =>
            response.json().then(data => ({
                data: cardsStubData.data,
                status: response.status
            }))
        )
        .then(response => {
            if (response.status === 200) {
                dispatch(receiveCard(cardsStubData.data))
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
                dispatch(receiveCard(response.data))
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

export function receiveCard(data) {
    return {
        type: actions.SET_CARD_LIST,
        payload: data.cards};
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SET_CARD_LIST: {
            return {
                ...state,
                cardList: action.payload
            };
        }
        default: {
            return state;
        }
    }
}