import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Collection } from "../collections";

@modelOptions({
    schemaOptions:{
    collection:Collection.USER
    }
})
 export class User {
     @prop()
     chatId: number;

     @prop()
     first_name: string;

     @prop()
     username ?:  string;

     @prop()
     telegram_id:number;
     @prop({
        default:false
     })
     IsAdmin:boolean;
     createdAt: Date
     UpdatedAt: Date

 }

 export const UserModel = getModelForClass(User)
