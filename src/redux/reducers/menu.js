import {CONNECTIONERROR, MAINYUK, MOVEMENU, SHOWMENU} from "../actions/menu";

const initialState = {
    menuStatus: true,
    menuNow: 'menu',
    connection: true
};

const menu = (state = initialState, action) => {
    switch (action.type) {
        case SHOWMENU:
            return initialState;

        case MAINYUK:
            return {
                ...state,
                menuStatus: false
            };

        case CONNECTIONERROR:
            return {
                ...state,
                connection: false
            };

        case MOVEMENU:
            return {
                ...state,
                menuNow: action.menuName
            };

        default:
            return state;
    }
};

export default menu;
