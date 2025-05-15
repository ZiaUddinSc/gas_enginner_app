import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList,SafeAreaView } from 'react-native';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { ArrowLeft, Plus, Search } from 'lucide-react-native';
import styles from './styles';
import {

    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const CompanyUsersScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Fayad', status: 'Inactive', renewal: 'N/A' },
    { id: 2, name: 'Alif', status: 'Inactive', renewal: 'N/A' }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const addNewUser = () => {
    // Navigation to add user screen or show modal
    navigation.navigate('AddUserScreen');
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } 
        : user
    ));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <CustomHeader
      fontSize={hp(2.2)}
        title="Company Users"
        leftIcon={<ArrowLeft  size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
         

          <View style={styles.searchContainer}>
            <Search size={20} color="#888" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={addNewUser}>
            <Plus size={20} color="white" />
            <Text style={styles.addButtonText}>Add New User</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredUsers}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userRenewal}>Renews {item.renewal}</Text>
              </View>
              
              <TouchableOpacity 
                style={[
                  styles.statusButton,
                  item.status === 'Active' ? styles.activeButton : styles.inactiveButton
                ]}
                onPress={() => toggleUserStatus(item.id)}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No users found</Text>
            </View>
          }
        />
      </View>
    </View>
    </SafeAreaView>
  );
};



export default CompanyUsersScreen;