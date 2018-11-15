export const addToFavourites = (recipe) => {
    return {
        type: "ADD_TO_FAVOURITES",
        payload: {recipe}
    }
}

export const removeFromFavourites = (recipe) => {
    return {
        type: "REMOVE_FROM_FAVOURITES",
        payload: {recipe}
    }
}