import { UserModel } from "../db/model/user.model"

export async function getUserAll(){
    return  await UserModel.find();  
}

export async function getIsAdmin(Id:number) {
    const users = await UserModel.find()
    const foundAdmin = users.map(u=>u.chatId == Id);
    if(foundAdmin) return true;
    else return false;
}

export async function createUser(chatId:number , first_name:string , username:string , telegram_id:number ) {
    const foundUser = await UserModel.find({username:username})
    if(foundUser.length == 0){
        UserModel.create({chatId, first_name, username, telegram_id })  
    }
    console.log("\\\\\\\\\\\\\\\\\\\ Userchat:   ",foundUser)
    
}


