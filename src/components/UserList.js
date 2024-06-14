import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserlist } from '../redux/action';

function UserList() {
  const userList = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  console.warn(userList);

  useEffect(() => {
    dispatch(getUserlist());
  }, []);
  return (
    <View>
      {userList.length ? (
        userList.map((post, index) => (<Text key={index}>Title: {post.id}</Text>))
      ) : (
        <Text>No Data Found</Text>
      )}
    </View>
  );
}

export default UserList;
