import { Text, View } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { styles } from "./styles";
import { ITotalSpendingGraph } from "./interface";

const TotalSpendingGraph = ({ totalSpent, totalLimit }: ITotalSpendingGraph) => {
    const spentPercentage = (totalSpent == 0 && totalSpent == 0) ? 0 : (totalSpent) / totalLimit * 100;
    return (
        <View>
            <AnimatedCircularProgress
                style={{ alignSelf: 'center' }}
                size={270}
                width={10}
                fill={spentPercentage}
                arcSweepAngle={180}
                tintColor={spentPercentage < 50 ? "#EE9E38" : '#35C937'}
                lineCap='round'
                rotation={-90}
                backgroundColor="#F1F0F5"
                padding={10}
            />
            <View key='spendingLimit' style={styles.amtText}>
                <Text>Amount Spent</Text>
                <Text style={{ fontWeight: 'bold' }}>AED {totalSpent}</Text>
            </View>
            <View key='totalSpending' style={styles.totalSpending}>
                <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{spentPercentage.toFixed(0)}%</Text>
                <Text style={{ fontWeight: 'bold' }}>Total Spendings</Text>
            </View>
            <View key='amountSpent' style={[styles.amtText,{ alignSelf: 'flex-end'}]}>
                <Text>Spending limit</Text>
                <Text style={{ fontWeight: 'bold' }}>AED {totalLimit}</Text>
            </View>
        </View>
    )
}
export default TotalSpendingGraph