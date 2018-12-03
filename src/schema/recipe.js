import { schema } from 'normalizr';


//search
const recipesSchema = new schema.Entity('recipes', {}, { idAttribute: 'recipe_id' });

//get 
const recipeSchema = new schema.Entity('recipe', {}, { idAttribute: 'recipe_id' });

export { recipesSchema, recipeSchema } ;
