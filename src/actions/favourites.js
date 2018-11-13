export const updateFavourites = (recipe) => {
    return (getState) => {
        return {
            type: "ADD_TO_FAVOURITES",
            payload: recipe,
        }
    }
    
}