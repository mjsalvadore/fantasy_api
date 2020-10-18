import {Entity} from "./entity";
import {Player} from "./player";

export interface DraftResults {
    availableEntities: Array<Entity>;
    draft: (Player, Entity) => DraftResults;
    players: Array<Player>;
}