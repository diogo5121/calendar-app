import Plans from "../models/Plans";
import User from "../models/Users";

export interface LoginResponse {
    success: boolean;
    token?: string;
    refreshToken?: string;
    message?: string;
    user?: User;
    plans?: Plans;
}