import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum Town {
  TORONTO = "TORONTO",
  MONTREAL = "MONTREAL",
  VANCOUVER = "VANCOUVER",
  CALGARY = "CALGARY",
  HALIFAX = "HALIFAX"
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly city: string;
  readonly stars?: number | null;
  readonly trouble?: boolean | null;
  readonly traveltown?: Town | keyof typeof Town | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}