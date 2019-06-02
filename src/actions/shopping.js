export function addItemsToList(ingredients, recipe_id, title, servingSize) {
  return {
    type: 'ADD_ITEMS_TO_LIST',
    payload: {ingredients, recipe_id, title, servingSize }
  }
}

export function removeRecipeFromList(recipe_id) {
  return {
    type: 'REMOVE_RECIPE_FROM_LIST',
    payload: recipe_id
  }
} 

export function removeItemFromList({recipe_id, item_id}) {
  return {
    type: 'REMOVE_ITEM_FROM_LIST',
    payload: {recipe_id, item_id}
  }
}

export function increaseIngredientCount({recipe_id, item_id}) {
  return {
    type: 'INCREASE_INGRIDIENT_COUNT',
    payload: {recipe_id, item_id}
  }
}
export function decreaseIngridientCount({recipe_id, item_id}){
  return {
    type: 'DECREASE_INGRIDIENT_COUNT',
    payload: {recipe_id, item_id}
  }
}