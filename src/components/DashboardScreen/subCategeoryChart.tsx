import { View } from "react-native"
import SubCategeoryChart from "../molecules/subCetogryPieChart"

const SubCategeoryCharts = () =>{
return(
    <View key='SubCategeoryChart' style={{ paddingHorizontal: 10 }}>
    <View key='SubCategeoryChart1' style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <SubCategeoryChart category={'clothing'} source={require('../../assets/icons/TShirt.png')} iconName='Clothing' progressColor="#DABB4F" />
        <SubCategeoryChart category={'gym'} source={require('../../assets/icons/Gym.png')} iconName='Gym' progressColor="#5281AC" />
        <SubCategeoryChart category={'health'} source={require('../../assets/icons/Health.png')} iconName='Health & fitness' progressColor="#EE9E38" />
    </View>
    <View key='SubCategeoryChart2' style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <SubCategeoryChart category={'food'} source={require('../../assets/icons/Food.png')} iconName='Food' progressColor="#76A6D3" />
        <SubCategeoryChart category={'house'} source={require('../../assets/icons/House.png')} iconName='Housing' progressColor="#DFA1A7" />
        <SubCategeoryChart category={'beauty'} source={require('../../assets/icons/Beauty.png')} iconName='Beauty' progressColor="#5ACCD1" />
    </View>
</View>
)}
export default SubCategeoryCharts