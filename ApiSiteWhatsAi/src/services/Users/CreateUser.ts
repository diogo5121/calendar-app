import User from "../../models/Users";



export async function CreateUser(uid:string, name: string, email: string, companyId: number, phone: number){
    try{
        const user = await User.create({
            uid: uid,
            name: name,
            email: email,
            companyId: companyId,
            phone: phone,
            typeUser: 'admin',
        });
        return user;
    }catch(e){
        console.log("Erro ao criar um usuario no sistema: ", e);
    }

}