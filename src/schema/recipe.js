import { schema } from 'normalizr';

const recipesSchema = new schema.Entity('recipes', {}, { idAttribute: 'recipe_id' });

export { recipesSchema } ;
