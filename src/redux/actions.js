import { FETCH_GALLERY } from "./types";

export function fetchGallery() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
        const json = await response.json();
        dispatch({type: FETCH_GALLERY, payload: json})
    }
}
