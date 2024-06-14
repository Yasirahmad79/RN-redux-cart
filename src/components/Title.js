import { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

export const Title = () => {
  const [cartItem, setCartItem] = useState(0)
  const cartData = useSelector((state)=> state.reducer);
  useEffect(()=>{
      setCartItem(cartData.length)
  }, [cartData])
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>Redux Products</Text>
      <Text style={styles.itemCount}>{cartItem}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
  },
  itemCount: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
    width: 50,
    height:50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#fff',
    textAlign: 'center'
  },
});
