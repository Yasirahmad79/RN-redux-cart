import React from 'react';
import {Button, ScrollView} from 'react-native';
import {Title} from './Title';
import {Products} from './Products';

const items = [
  {
    name: 'Black Tea shirt',
    image: require('../images/black.jpg'),
    price: 400,
  },
  {
    name: 'Green Tea shirt',
    image: require('../images/green.jpg'),
    price: 400,
  },
  {
    name: 'Grey Tea shirt',
    image: require('../images/grey.jpg'),
    price: 300,
  },
  {
    name: 'White Tea shirt',
    image: require('../images/white.jpg'),
    price: 500,
  },
];

function ProductWrapper({navigation}) {
  return (
    <ScrollView>
      <Title />
      <Button title='Go To User List' onPress={() => navigation.navigate('Users')} />
      {items.map((items, index) => (
        <Products items={items} key={index} />
      ))}
    </ScrollView>
  );
}

export default ProductWrapper;
