import { Column, Entity } from "typeorm";
import Base from "./Base.entity";

export class User extends Base {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
