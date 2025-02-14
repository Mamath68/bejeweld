import {View, ScrollView} from 'react-native';
import {Component} from "react";
import Bouton from "@/app/components/Bouton";
import Grid from "@/app/components/Grid";
import styles from "@/assets/theme/style";
import Alert from "@/app/components/Alert";

interface BejeweldProps {
}

interface BejeweldState {
    alertVisible1: boolean;
    alertVisible2: boolean;
}

export default class Bejeweld extends Component<BejeweldProps, BejeweldState> {
    constructor(props: BejeweldProps) {
        super(props);
        this.state = {
            alertVisible1: false,
            alertVisible2: false,
        };
    }

    showAlert1 = () => {
        this.setState({alertVisible1: true});
    };
    showAlert2 = () => {
        this.setState({alertVisible2: true});
    };

    closeAlert1 = () => {
        this.setState({alertVisible1: false});
    };
    closeAlert2 = () => {
        this.setState({alertVisible2: false});
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.containerHome}>
                <View style={styles.contained}>
                    <Bouton
                        onPress={this.showAlert1}
                        title="New Game"
                        style={{backgroundColor: 'grey'}}
                    />
                    <Bouton
                        onPress={this.showAlert2}
                        title="Highest Score"
                        style={{backgroundColor: 'grey'}}
                    />
                </View>
                <View>
                    <Grid/>
                </View>
                <Alert
                    visible={this.state.alertVisible1}
                    title="Nouveau Jeu"
                    message="Commençon un nouveau jeux"
                    onClose={this.closeAlert1}
                />
                <Alert
                    visible={this.state.alertVisible2}
                    title="Meilleurs Scores"
                    message="Voici les meilleurs Scores"
                    onClose={this.closeAlert2}
                />
            </ScrollView>
        );
    }
}
