import moment from "moment";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MonthDataContext } from "../../DashboardScreen";
import { styles } from "../../DashboardScreen/styles";

const MonthSelection = () => {
    const selectedTime = useContext(MonthDataContext)
    const selectedMonth = selectedTime.month
    const selectedYear = selectedTime.year

    const currentDate = new Date();
    const currentMonth = moment.months(currentDate.getMonth())
    const currentYear = currentDate.getFullYear()
    const isCurrentMonthData = currentMonth + currentYear == moment.months(selectedMonth) + selectedYear;

    const updateMonth = (type: string) => {
        let month = selectedMonth;
        let year = selectedYear;
        if (type == 'previous') {
            if (selectedMonth == 0) {
                month = 11;
                year = selectedYear - 1;
            } else {
                month = selectedMonth - 1;
            }
        } else {
            if (selectedMonth == 11) {
                month = 0;
                year = selectedYear + 1;
            } else {
                month = selectedMonth + 1;
            }
        }
        selectedTime.updateMonth(month, year)
    }
    return (
        <View style={styles.monthHeading}>
            <TouchableOpacity style={styles.button} onPress={() => updateMonth('previous')}>
                <Image source={require('../../../assets/icons/arrow-left.png')} />
            </TouchableOpacity>
            <Text style={styles.monthText}>{` ${moment.months(selectedMonth)} ${selectedYear}`}</Text>
            <TouchableOpacity disabled={isCurrentMonthData} style={styles.button} onPress={() => updateMonth('next')}>
                {isCurrentMonthData ?
                    <Image source={require('../../../assets/icons/arrow-right-disabled.png')} />
                    : <Image source={require('../../../assets/icons/arrow-right.png')} />
                }
            </TouchableOpacity>
        </View>
    )
}
export default MonthSelection;