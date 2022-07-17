import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Greeter from './components/greeter'
import styles from './styles'
import CustomInput from '../../components/custominput'
import Spacer from '../../components/spacer'
import Category from './components/categories'
import Transaction from './components/transaction'
import values from '../../constants/values'
import { categories, transactions } from '../../constants/data'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.horizontalPaddingView}>
                <Greeter user={{
                    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEr7sYKJLF9gA/profile-displayphoto-shrink_800_800/0/1628684419233?e=1660780800&v=beta&t=d329SGXiU0TRuAyIvqjIBm6BgXw9esZjD0SKSUah0z8',
                    name: "Kyle"
                }} />
                <Spacer height={20}/>
                <CustomInput placeholder='Search' icon='search-outline'/>
                <Spacer height={20} />
                <Text style={values.h2Style}>Categories</Text>
                <Spacer height={20} />
            </View>
            <View style={{paddingLeft: values.horizontalPadding}}>
                <FlatList
                    horizontal
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Category category={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
                    />
            </View>

            <View style={styles.horizontalPaddingView}>
                <Spacer height={20} />
                <Text style={values.h2Style}>Transaction History</Text>
                <Spacer height={20} />
                <FlatList
                    date={transactions}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Transaction transaction={item} onPress={(val) => console.warn(`Clicked ${val}`)} />}
                    />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen