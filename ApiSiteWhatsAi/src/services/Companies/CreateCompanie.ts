import Companies from "../../models/Companies";

export async function CreateCompanies(uid: string, email: string, companyname: string, phone: number, planId: number) {
    try {
        const companie = await Companies.create({
            uid: uid,
            email: email,
            companyname: companyname,
            phone: phone,
            planId: planId
        });

        return companie;
        
    } catch (error) {
        console.error("Erro ao criar empresa:", error);
    }
}
