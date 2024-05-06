import { useContext } from "react";
import { Image, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { MonthDataContext } from "../../DashboardScreen";
import { ISubCetogory } from "./interface";

const SubCategeoryChart = ({ category,source, iconName, progressColor }: ISubCetogory) => {
    const spendingData = useContext(MonthDataContext)
    const currentCategoryDetails = spendingData.spentMonthlyData[spendingData.month+'-'+spendingData.year][category]
    return (
        <View key='SubCategeoryChart' style={{ alignItems: 'center', width: '30%', marginVertical: 10 }}>
            <AnimatedCircularProgress
                size={50}
                width={2}
                fill={currentCategoryDetails.spent/currentCategoryDetails.limit*100}
                tintColor={progressColor}
                lineCap='round'
                rotation={0}
                backgroundColor="transparent"
                padding={10}
            />
            <Image style={{ position: 'absolute', marginTop: 17 }} source={source} />
            <Text style={{ textAlign: 'center' }}>{iconName}</Text>
        </View>
    )
}
export default SubCategeoryChart;