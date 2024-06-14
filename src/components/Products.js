import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/action';

export const Products = ({ items }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.reducer);
  const handleAddToCart = data => {
    dispatch(addToCart(data));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItem.filter((element) =>{
      return element.name === items.name
    })
    if (result.length) {
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }
  }, [cartItem]);

  return (
    <>
      <View style={styles.cartContainer}>
      <View>
        <Image style={styles.itemImage} source={items.image} />
        <Text style={styles.itemName}>{items.name}</Text>
        <Text style={styles.itemPrice}>Rs {items.price}</Text>
        {isAdded ? (
          <Button
            title="Remove From Cart"
            onPress={() => handleRemoveFromCart(items)}
          />
        ) : (
          <Button
            title="Add To Cart"
            onPress={() => handleAddToCart(items)}
          />
        )}
      </View>
    </View>

    </>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  itemName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  itemPrice: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
  },
});
