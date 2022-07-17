import { StyleSheet, Text, View, Image } from "react-native";
import React from 'react'
import colors from "../../constants/colors"
import values from "../../constants/values"
import CustomButton from "../../../components/customButton"

const Transaction = ({Transaction, onPress}) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.leftSection}>
                <View style = { [styles.imageConatiner, {backgroundColor: transaction.backgroundColor}]}>
                    <Image style = {styles.image} source={transaction.img} />
                </View>
                <View>
                    <Text style = { values.pStyle}>{transaction.heading}</Text>
                    <Text style = { values.h2Style}>-{transaction.price}</Text>
                </View>
                <CustomButton
                    width={52}
                    height={25}
                    radius={5}
                    textSize={12}
                    text='Details'
                    backgroundColor={colors.orage}
                    onPress={() => onPress(transaction.heading)}
                    />
            </View>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 70,
        borderRadius: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingEnd: 15,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})