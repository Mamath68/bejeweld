import {View, StyleSheet, ScrollView} from 'react-native';
import {Component} from "react";
import Bouton from "@/app/components/Bouton";
import Title from "@/app/components/Title";
/*
import Grid from "@/app/components/Grid";
*/

const GRID_SIZE = 8;

export default class Bejeweld extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Title title="BEJEWELD" textStyle={styles.title} style={styles.title}/>
                <View style={styles.contained}>
                    <Bouton
                        onPress={() => alert('Le Jeu Commence')}
                        title="New Game"
                        style={{backgroundColor: 'grey'}}
                    />
                    <Bouton
                        onPress={() => alert('Le Jeu Commence')}
                        title="Highest Score"
                        style={{backgroundColor: 'grey'}}
                    />
                </View>
                <View>
                    {/*<Grid/>*/}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contained: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        paddingVertical: 10,
        backgroundColor: 'black',
        width: '100%',
        marginBottom: 5,
        color: 'white',
        textAlign: 'center',
    }

})
