export const addToFavourites = (id) => {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: id
    }
}

export const removeFromFavourites = (id) => {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: id
    }
}