import { Request, Response } from "express";
import { PlansList } from "../services/PlansServices/PlansList";
import { PlansResponse } from "../Interfaces/PlansResponse";



export const list = async (req: Request, res: Response): Promise<Response> => {
    const plansResponse: PlansResponse = await PlansList();
    if (plansResponse.success === true) {
        return res.status(200).json(plansResponse);
    } else {
        return res.status(500).json({ success: false, error: "Failed to fetch plans" });
    }
};