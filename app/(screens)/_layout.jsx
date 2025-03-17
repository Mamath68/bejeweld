import {Stack} from 'expo-router';
import {HeaderTitle} from "../../components/functions";

export default function _layout() {

    return (
        <Stack screenOptions={{
            headerTitle: () => <HeaderTitle/>,
            headerStyle: {
                backgroundColor: 'black',
            },
        }}/>
    );
}
