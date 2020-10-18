import {Entity} from "./entity";
export interface Game<K extends string> {
    time: string; //YYYY-MM-DD
    entityAttributes: Map<Entity, Map<K, Number>>;
}