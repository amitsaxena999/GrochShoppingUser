import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {fetchCategory, vendorProductImage} from '../data/data';
import {AuthContext} from '../context/AuthProvider';

const TopPickListItem = props => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const {item} = props;
  const {productName, productId} = item;

  // console.log(productName);

  const fetchData = async () => {
    const res = await vendorProductImage(productName);
    setImage(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TouchableOpacity
      style={styles.categorySectionItem}
      onPress={() =>
        navigation.navigate('VendorList', {
          productId: productId,
          productName: productName,
        })
      }>
      <View style={[styles.categoryItemLogoBG, styles.bgColor3]}>
        <Image
          style={styles.categoryItemLogo}
          source={
            image !== null
              ? {uri: image}
              : require('./../assets/Beauty&Hygiene.png')
          }></Image>
      </View>
      <Text style={styles.categoryItemName}>{productName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  storeNearYou: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // flexDirection: 'column'
  },
  storeNearYouHeader: {
    flexDirection: 'row',
    height: 30,
    marginTop: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  storeNearYouHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'left',
    // height: 50
  },
  fevoritSectionHeaderHistory: {
    // flex: 1,
    fontSize: 14,
    color: 'rgba(255, 107, 107, 1)',
    textAlign: 'right',
    height: 30,
  },
  categorySectionHeaderCategory: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#22292E',
    textAlign: 'left',
    height: 30,
  },
  categorySectionHeaderBtn: {
    // flex: 1,
    fontSize: 14,
    color: '#54B175',
    textAlign: 'right',
    height: 30,
  },
  categorySectionGrid: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width / 3,
  },
  categoryItemLogoBG: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFECE8',
  },
  categoryItemLogo: {
    height: 50,
    width: 75,
  },
  categoryItemName: {
    fontSize: 9,
    color: '#22292E',
    textAlign: 'center',
  },
  bgColor1: {
    backgroundColor: '#47CA19',
  },

  bgColor2: {
    backgroundColor: '#FFF6E4',
  },
  bgColor3: {
    backgroundColor: '#F1EDFC',
  },
  bgColor4: {
    backgroundColor: '#FFECE8',
  },
});

export default TopPickListItem;
