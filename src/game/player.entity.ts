import { UUIDColumn } from "common/decorators/uuid-column.decorator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import User from "user/user.entity";
import Game from "./game.entity";

@Entity()
export default class Player {
    @ManyToOne(
        type => Game,
        game => game.players
    )
    @JoinColumn({ name: "game_id" })
    public game: Game;

    @UUIDColumn({ primary: true, select: false })
    public game_id: string;

    @ManyToOne(type => User, { eager: true })
    @JoinColumn({ name: "user_id" })
    public user: User;

    @UUIDColumn({ primary: true, select: false })
    public user_id: string;
}
