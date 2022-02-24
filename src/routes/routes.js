import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Home from "../screens/home";
import Search from "../screens/search";
import SongList from "../screens/song-list";
import RepertoryList from "../screens/repertory-list";
import Song from "../screens/song";


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SongList" component={SongList} />
            <Stack.Screen name="RepertoryList" component={RepertoryList} />
            <Stack.Screen name="Song" component={Song} />
        </Stack.Navigator>
    );
}

export default Routes;