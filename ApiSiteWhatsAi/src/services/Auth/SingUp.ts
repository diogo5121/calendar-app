import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { CreateCompanies } from '../Companies/CreateCompanie';
import { CreateUser } from '../Users/CreateUser';



export default async function singUpWithEmailandPasswordService(name: string, email: string, companyname: string, phone: number, password: string, planId: number) {
    if(!name || !email || !phone || !password) {
        return {
            success: false,
            message: "Invalid types of data"
        }
    }
    try {
        const authFire = await createUserWithEmailAndPassword(auth, email, password);

        const companie = await CreateCompanies(authFire.user.uid, email, companyname, phone, planId);

        const user = await CreateUser(authFire.user.uid, name, email, companie?.id || 0 , phone)
        
        return {
            success: true,
            user
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            message: 'Email used'
        };
    }

}