import { View, Text } from "react-native";
import styles from "./styles"

export default function Search({route, navigation}){

    const { song } = route.params;

    return(
        <View style={styles.page}>
            <Text>{song}</Text>
        </View>
    );
}