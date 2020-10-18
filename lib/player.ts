import {Entity} from "./entity";

export interface Player {
    entities: Array<Entity>;
    name: string;
    UID: string;
}