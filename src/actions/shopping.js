export function addItemsToList(ingredients) {
  return {
    type: 'ADD_ITEMS_TO_LIST',
    payload: ingredients
  }
}