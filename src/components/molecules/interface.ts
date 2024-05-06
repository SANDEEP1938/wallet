import { Category } from "../SetLimit";

interface IcurrentSpendings { 
    limit: number, 
    spent: number 
}

export interface IUpdateCategoryLimit { 
    category: Category, 
    currentSpendings: IcurrentSpendings,
    updateLimit:(category:string,limit:number)=>void 
}