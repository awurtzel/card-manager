import cardsStubData from "../cardsStubData";

const defaultState = {
    cardList: [],
    currCardNumber: 0,
};

export const actions = {
    SET_CARD_LIST: 'SET_CARD_LIST',
    SET_CURR_CARD_NUMBER: 'SET_CURR_CARD_NUMBER',
    CREATE_CARD: 'CREATE_CARD',
    CREATE_CARD_FAIL: 'CREATE_CARD_FAIL',
    CREATE_CARD_SUCCESS: 'CREATE_CARD_SUCCESS',
};

const USE_STUB_DATA = false;

function fetchStubCardList() {
    return (dispatch) => {
        dispatch(receiveCardList(cardsStubData.data))
    };
}

const fetchServiceCardList = () => {
    return (dispatch) => {
        fetch('http://localhost:8888/api/cards')
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
        payload: data,
    };
}

export function setCurrCardNumber(data) {
    return {
        type: actions.SET_CURR_CARD_NUMBER,
        payload: data,
    };
}

export function createCard(cardPayload) {
    return {
        type: actions.CREATE_CARD,
        payload: {
            request: {
                url: 'http://localhost:8888/api/insertCard',
                method: 'POST',
                data: cardPayload,
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        },
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
        case actions.CREATE_CARD_FAIL: {
            return {
                ...state,
                createdCard: {
                    isLoading: false,
                    success: false,
                },
            };
        }
        case actions.CREATE_CARD_SUCCESS: {
            return {
                ...state,
                createdCard: {
                    isLoading: false,
                    success: true,
                },
            };
        }
        case actions.CREATE_CARD: {
            return {
                ...state,
                createdCard: {
                    isLoading: true,
                    success: false,
                },
            };
        }
        default: {
            return state;
        }
    }
}

export default {
    fetchCardList, setCurrCardNumber, createCard, actions,
};