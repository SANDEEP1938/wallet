import React, { createContext, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, Pressable, StyleSheet, Image } from 'react-native';
import SubCategeoryCharts from './subCategeoryChart';
import TotalSpendingGraph from './totalSpendingGraph';
import MonthSelection from '../molecules/monthSelection';
import { spentMonthlyData } from './interface';
import { styles } from './styles';

const currentDate = new Date();
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

export const MonthDataContext = createContext({
    month: currentMonth,
    year: currentYear,
    updateMonth: (month: number, year: number) => { },
    spentMonthlyData,
    updateLimit: (category: string, limit: number) => { }
});

const DashboardScreen = ({ navigation }: { navigation: any }) => {
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [spentData, setSpentData] = useState(spentMonthlyData);
    let totalSpent = 0
    let totalLimit = 0
    const selectedTime = month.toString() + '-' + year.toString()
    
    for (const key in spentData[selectedTime]) {
        totalSpent = totalSpent + spentData[selectedTime][key].spent
        totalLimit = totalLimit + spentData[selectedTime][key].limit
    }
    const isDataAvailable=!!spentData[selectedTime];
    const updateMonth = (month: number, year: number) => {
        setMonth(month)
        setYear(year)
    }
    const updateLimit = (category: string, limit: number) => {
        const updatedSpentAmt = { ...spentData[selectedTime][category], 'spent': parseInt(limit.toFixed(0)) }
        const updatedCategoryData = { ...spentData[selectedTime], [category]: updatedSpentAmt }
        const updatedLimit = { ...spentData, [selectedTime]: updatedCategoryData }
        setSpentData(updatedLimit)
    }
    return (
        <MonthDataContext.Provider value={{ month, year, updateMonth, spentMonthlyData:spentData, updateLimit }}>
            <View style={styles.mainCard}>
                <View style={styles.horizontalBlock}>
                    <Text style={styles.headingText}>Spending summary</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SetLimit', { spentData, selectedTime, updateLimit })}>
                        <Text style={styles.underlinedText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <MonthSelection />
                <TotalSpendingGraph totalSpent={totalSpent} totalLimit={totalLimit} />
                {isDataAvailable?<SubCategeoryCharts />
                :<Image style={{margin:10}} source={require('../../assets/icons/NoData.png')}/>}
            </View>
        </MonthDataContext.Provider>
    );
};

export default DashboardScreen;
