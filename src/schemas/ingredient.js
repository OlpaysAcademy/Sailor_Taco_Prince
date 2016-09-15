// @flow
import { Schema } from 'normalizr';

type Ingredient = {
    name: string
}

const ingredient = new Schema('ingredients');

export type { Ingredient };
export default ingredient;