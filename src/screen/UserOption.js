import React, {useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height, width} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    offer: '30 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '30 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
  {
    id: 1,
    offer: '39 % Discount',
    img: './../assets/slide1.png',
    vendorId: '12313',
    offerID: '32423',
  },
];
import {ScrollView, StatusBar, useColorScheme} from 'react-native';

import {initBaseurl} from '../data/user';
import {AuthContext} from '../context/AuthProvider';

const imageW = width * 0.9;
const imageH = imageW * 1.54;

const UserOption = ({navigation}) => {
  const {url, setUrl} = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              style={styles.userImg}
              source={require('./../assets/defaultUser.png')}></Image>
          </TouchableOpacity>
          <View style={styles.headerDetails}>
            <Text style={styles.userName}>Amit Saxena</Text>
            <Text style={styles.otherDetails}>amitsaxena@gmail.com</Text>
            <Text style={styles.otherDetails}>9764519996</Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Text style={styles.itemName}>My Order</Text>
            <Text style={styles.itemDetails}>Past Order</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
          </View>

          <View style={styles.item}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Shopping address</Text>
            <Text style={styles.itemDetails}>3 addressess</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>

          <View style={styles.item}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Payment Method</Text>
            <Text style={styles.itemDetails}>
              Pytem, Debit Card, Credit Card
            </Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Deals')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Deals</Text>
            <Text style={styles.itemDetails}>Promo Code , Special Offer</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>

          <View style={styles.item}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
            <Text style={styles.itemName}>Settings</Text>
            <Text style={styles.itemDetails}>
              Profile, Notifications, Passwords
            </Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Help')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Help') */}
            <Text style={styles.itemName}>Help</Text>
            <Text style={styles.itemDetails}>FAQ's and Links</Text>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </TouchableOpacity>

          <View style={styles.item} onPress={() => navigation.navigate('Help')}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Help') */}
            <Text style={styles.itemName}>Base Url</Text>
            <TextInput
              value={url}
              onChangeText={val => setUrl(val)}
              style={{color: '#030303', fontSize: 18}}
            />
            <TouchableOpacity
              onPress={() => {
                initBaseurl(url);
                Alert.alert('Base url changed');
              }}
              style={{
                backgroundColor: '#EA2C2C',
                width: 100,
                alignSelf: 'center',
                padding: 5,
                borderRadius: 10,
                margin: 10,
              }}>
              <Text
                style={[styles.itemName, {textAlign: 'center', color: '#fff'}]}>
                Save
              </Text>
            </TouchableOpacity>
            <AntDesign style={styles.AntDesign} name="right" color="black" />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '90%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  userImg: {
    height: 60,
    width: 60,
  },
  headerDetails: {
    marginLeft: 20,
    flex: 6,
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 22,
  },
  otherDetails: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9B9B9B',
    lineHeight: 20,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    // width: '100%',
    width: width,
    marginLeft: '5%',
    marginTop: '5%',
  },
  item: {
    borderBottomColor: '#F7F7F7',
    borderBottomWidth: 1,
    // marginTop: '5%',
    marginBottom: '5%',
    // height: '10%',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    width: '100%',
    fontWeight: '400',
  },
  AntDesign: {
    fontSize: 16,
    color: '#9B9B9B',
    textAlign: 'right',
  },
  itemDetails: {
    fontSize: 11,
    color: '#9B9B9B',
  },
  itemNameIcon: {
    // flex: 1,
    flexDirection: 'row',
  },
});

export default UserOption;
