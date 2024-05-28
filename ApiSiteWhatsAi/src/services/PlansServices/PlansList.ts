import { PlansResponse } from "../../Interfaces/PlansResponse";
import Plans from "../../models/Plans";



export async function PlansList(): Promise<PlansResponse> {
    try {
        const { count, rows: list } = await Plans.findAndCountAll();

        const final: PlansResponse = {
            success: true,
            plans: {
                count,
                rows: list
            }
        }

        return final;

    } catch (e) {
        console.log("Error while fetching plans: ", e);
        return { success: false };
    }
}