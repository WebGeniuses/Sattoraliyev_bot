export declare class User {
    chatId: number;
    first_name: string;
    username?: string;
    telegram_id: number;
    IsAdmin: boolean;
    createdAt: Date;
    UpdatedAt: Date;
}
export declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
