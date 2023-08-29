import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button,TouchableOpacity,View,Text } from 'react-native';

import { StackActions } from '@react-navigation/native';
// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import CategoryDetailsScreen from './screens/CategoryDetailsScreen';
import CategoryDetailsScreen2 from './screens/CategoryDetailsScreen2';
import ProductView from './screens/ProductView';
import ProductDetailScreen from './screens/ProductDetailScreen';
import BasketScreen from './screens/BasketScreen';
import OrdersScreen from './screens/OrdersScreen';
import AdressesScreen from './screens/AdressesScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import PInformationScreen from './screens/PInformationScreen';
import AddAddressScreen from './screens/AddAddressScreen';
import MakeOrder from './screens/MakeOrder';
import OrderCompleteScreen from './screens/OrderCompleteScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import OrdersDetailScreen from './screens/OrdersDetailScreen';
//Screen names
const homeName = "Ana Sayfa";
const detailsName = "Kategoriler";
const settingsName = "Sepetim";
const AccountName = "Hesabım";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabView() {
  return (
    
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'basket-sharp' : 'basket-sharp';
            }else if(rn===AccountName){
				iconName=focused?'person-sharp':'person-sharp'
			}

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={BasketScreen} />
        <Tab.Screen name={AccountName} component={SettingsScreen} options={{
						contentStyle:{
			backgroundColor:'#ffffff'
		  },}} />

      </Tab.Navigator>

    
  );
}

export default function MainContainer() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="TabView" component={TabView} />
				<Stack.Screen
					name="CategoryDetailsScreen"
					component={CategoryDetailsScreen}
					options={{
						headerShown: true,
					}}
				/>
        <Stack.Screen
					name="CategoryDetailsScreen2"
					component={CategoryDetailsScreen2}
					options={{
						headerShown: true,
					}}
				/>
         <Stack.Screen
					name="ProductView"
					component={ProductView}
					options={{
						headerShown: true,
					}}
				/>
         <Stack.Screen
					name="ProductDetailScreen"
					component={ProductDetailScreen}
					options={{
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="OrdersScreen"
					component={OrdersScreen}
					options={{
								  headerTintColor:'#ff0000',

												          title: 'Siparişlerim',

						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="FavoritesScreen"
					component={FavoritesScreen}
					options={{
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="AdressesScreen"
					component={AdressesScreen}
					options={({ navigation }) => ({
											headerShown:true,

          title: 'Adreslerim',
		  
		  headerTintColor:'#ff0000',
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => navigation.dispatch(StackActions.push('AddAddressScreen'))} >
                     <Text style={{color:'#ff0000'}}>Adres Ekle</Text>

            </TouchableOpacity>
          ),
        })}

				/>
				<Stack.Screen
					name="AddAddressScreen"
					component={AddAddressScreen}
					options={{
						contentStyle:{
			backgroundColor:'#ffffff'
		  },
						headerShown: true,
						title:'Adres ekle',
						headerTintColor:'#ff0000'
					}}
				/>
				<Stack.Screen
					name="PInformationScreen"
					component={PInformationScreen}
					options={{
								  headerTintColor:'#ff0000',
						          title: 'Kullanıcı Bilgileri',
						headerShown: true,
							contentStyle:{
			backgroundColor:'#ffffff'
		  },
					}}
				/>
				<Stack.Screen
					name="ChangePasswordScreen"
					component={ChangePasswordScreen}
					options={{
						headerTintColor:'#ff0000',
						          title: 'Şifremi Unuttum',
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="MakeOrder"
					component={MakeOrder}
					options={{
						headerTintColor:'#ff0000',
						          title: 'Ödeme Yöntemi - Kargo',
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="OrderCompleteScreen"
					component={OrderCompleteScreen}
					options={{
						headerTintColor:'#ff0000',
						          title: 'Sipariş Oluşturuldu',
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="RegisterScreen"
					component={RegisterScreen}
					options={{
							contentStyle:{
			backgroundColor:'#ffffff'
		  },
						headerTintColor:'#ff0000',
					}}
				/>
				<Stack.Screen
					name="ResetPasswordScreen"
					component={ResetPasswordScreen}
					options={{
						headerTintColor:'#ff0000',
						          title: 'Şifremi Unuttum',
						headerShown: true,
					}}
				/>
				<Stack.Screen
					name="OrdersDetailScreen"
					component={OrdersDetailScreen}
					options={{
						headerTintColor:'#ff0000',
						          title: 'Sipariş Detay',
						headerShown: true,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}