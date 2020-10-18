import {Entity} from "./entity";

export interface DraftResults {
    availableEntities: Array<Entity>;
    draft: (Player, Entity) => DraftResults;
    players: Array<Player>;
}