import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Home(props) {
    const [kmsPorLitroRecebido, setKmsPorLitroRecebido] = useState();
    const [nivelConsumoRecebido, setNivelConsumoRecebido] = useState()
    const niveisConsumo = {
        "E": {
            color: "red"
        },
        "D": {
            color: "orange"
        },
        "C": {
            color: "yellow"
        },
        "B": {
            color: "blue"
        },
        "A": {
            color: "gren"
        }
    }

    useEffect(() => {
        let nivelMedia;
        const { kmsPorLitro } = props.route.params
        setKmsPorLitroRecebido(kmsPorLitro)

        if (kmsPorLitroRecebido <= 4) {
            nivelMedia = "E"
        } else if (kmsPorLitroRecebido > 4 && kmsPorLitroRecebido <= 8) {
            nivelMedia = "D"
        } else if (kmsPorLitroRecebido > 8 && kmsPorLitroRecebido <= 10) {
            nivelMedia = "C"
        } else if (kmsPorLitroRecebido > 10 && kmsPorLitroRecebido <= 12) {
            nivelMedia = "B"
        } else if (kmsPorLitroRecebido > 12) {
            nivelMedia = "A"
        }
        
        setNivelConsumoRecebido(nivelMedia)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.headerHome}>O Consumo do seu veículo ficou em: </Text>
            <View style={styles.container}>
                <Text style={styles.headerHome}>{`${kmsPorLitroRecebido} Km/Litro`}</Text>
                <StatusBar style="auto" />
            </View>

            <Text style={styles.headerHome}>Categorizando o consumo como nível: </Text>
            <View>
                <Text style={nivelConsumoRecebido == "A" ? styles.nivelA : nivelConsumoRecebido == "B" ? styles.nivelB : nivelConsumoRecebido == "C" ? styles.nivelC : nivelConsumoRecebido == "D" ? styles.nivelD : nivelConsumoRecebido == "E" ? styles.nivelE : styles.nivel}>{nivelConsumoRecebido}</Text>
                <StatusBar style="auto" />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        margin: 5,
        textAlign: 'center',
        alignItems: 'center',
    }, headerHome: {
        marginTop: 10,
        padding: 10,
        fontSize: 20,
        textAlign: 'center'
    }, nivel: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center'
    }, nivelA: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: "green"
    }, nivelB: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: "blue"
    }, nivelC: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: "yellow"
    }, nivelD: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: "orange"
    }, nivelE: {
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: "red"
    },
});