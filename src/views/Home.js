import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Home({ navigation }) {

    const [litrosConsumidos, setLitrosConsumidos] = useState()
    const [kmsRodados, setKmsRodados] = useState()

    calculoMedia = () => {
        if (kmsRodados.length >= 1 && litrosConsumidos.length  >= 1) {
            let kmsPorLitro = (parseFloat(kmsRodados) / parseFloat(litrosConsumidos))
            navigation.navigate("CalculoConsumo", {kmsPorLitro: kmsPorLitro})
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerHome}>Informe abaixo os dados parar realizar o calculo do consumo do seu veículo</Text>
            <View style={styles.container}>
                <View>
                    <Text style={{ margin: 10 }}>Quantidade Litros Consumido:</Text>
                    <TextInput
                        value={litrosConsumidos}
                        onChangeText={setLitrosConsumidos}
                        style={styles.txtInp}
                        keyboardType="numeric"
                    />
                    <Text style={{ margin: 10 }}>Quantidade KMs Rodados:</Text>
                    <TextInput
                        value={kmsRodados}
                        onChangeText={setKmsRodados}
                        style={styles.txtInp}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.btnCalcular}>
                    <Button
                        title='Calcular'
                        onPress={calculoMedia}
                        color="#FFF"
                    />
                </View>

                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        margin: 5,
        textAlign: 'center',
        alignItems: 'center'
    }, headerHome: {
        marginTop: 20,
        padding: 10,
        fontSize: 20,
        textAlign: 'center'
    }, txtInp: {
        textAlign: 'center',
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        borderWidth: 1,
        height: 30,
        width: 200

    }, btnCalcular: {
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#1D983A',
    }

});