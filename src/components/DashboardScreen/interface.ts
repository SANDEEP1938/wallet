
interface CategoryData {
    spent: number;
    limit: number;
}
interface MonthlyData {
    [category: string]: CategoryData;
}
interface ISpentData {
    [monthYear: string]: MonthlyData;
}
export interface ITotalSpendingGraph{ 
    totalSpent: number, 
    totalLimit: number 
}
export const spentMonthlyData: ISpentData = {
    '4-2024': {
        'clothing': {
            'spent': 200,
            'limit': 1000
        },
        'gym': {
            'spent': 500,
            'limit': 3000
        },
        'health': {
            'spent': 200,
            'limit': 1000
        },
        'food': {
            'spent': 500,
            'limit': 1000
        },
        'house': {
            'spent': 1500,
            'limit': 6000
        },
        'beauty': {
            'spent': 500,
            'limit': 2000
        },
    },
    '2-2024': {
        'clothing': {
            'spent': 200,
            'limit': 500
        },
        'gym': {
            'spent': 500,
            'limit': 1500
        },
        'health': {
            'spent': 200,
            'limit': 500
        },
        'food': {
            'spent': 500,
            'limit': 500
        },
        'house': {
            'spent': 1500,
            'limit': 3000
        },
        'beauty': {
            'spent': 500,
            'limit': 1000
        },
    }, 
    '1-2024': {
        'clothing': {
            'spent': 200,
            'limit': 1000
        },
        'gym': {
            'spent': 500,
            'limit': 3000
        },
        'health': {
            'spent': 200,
            'limit': 1000
        },
        'food': {
            'spent': 500,
            'limit': 1000
        },
        'house': {
            'spent': 1500,
            'limit': 6000
        },
        'beauty': {
            'spent': 500,
            'limit': 2000
        },
    },
    '5-2024': {
        'clothing': {
            'spent': 200,
            'limit': 500
        },
        'gym': {
            'spent': 500,
            'limit': 1500
        },
        'health': {
            'spent': 200,
            'limit': 500
        },
        'food': {
            'spent': 500,
            'limit': 500
        },
        'house': {
            'spent': 1500,
            'limit': 3000
        },
        'beauty': {
            'spent': 500,
            'limit': 1000
        },
    },
}