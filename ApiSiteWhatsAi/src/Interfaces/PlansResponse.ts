import Plans from "../models/Plans";

export interface PlansResponse {
    success: boolean;
    plans?: PlansData;
}

export interface PlansData {
    count?: number;
    rows?: Plans[];
}