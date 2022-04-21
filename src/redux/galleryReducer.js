import { FETCH_GALLERY } from "./types";

const initialState = {
    gallery: []
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GALLERY:
            return {...state, gallery: action.payload};
        default: return state
    }
};
