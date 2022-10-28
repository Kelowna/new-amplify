// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Town = {
  "TORONTO": "TORONTO",
  "MONTREAL": "MONTREAL",
  "VANCOUVER": "VANCOUVER",
  "CALGARY": "CALGARY",
  "HALIFAX": "HALIFAX"
};

const { Restaurant } = initSchema(schema);

export {
  Restaurant,
  Town
};