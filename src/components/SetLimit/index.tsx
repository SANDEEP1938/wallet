import React from "react"
import { ScrollView } from "react-native"
import UpdateCategoryLimit from "../molecules/updateCategoryLimit";

export type Category = 'beauty' | 'house' | 'clothing' | 'food' | 'gym' | 'health';
const SetLimit = ({ route }: { navigation: any, route: any }) => {
    const spentData = route.params.spentData;
    const selectedTime = route.params.selectedTime;
    const updateLimit = route.params.updateLimit;
    
    return (
        <ScrollView>
            {spentData[selectedTime] && Object.keys(spentData[selectedTime]).map((category) => (
                <UpdateCategoryLimit key={category} category={category as Category} currentSpendings={spentData[selectedTime][category]} updateLimit={updateLimit}/>
            ))}
        </ScrollView>
    )
}
export default SetLimit