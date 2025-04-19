import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  SafeAreaView, // Added ScrollView
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  PlusCircle,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  LogOut,
} from 'lucide-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const jobsData = [
  {
    id: 1,
    status: 'Active',
    customer: 'Mr. Tom',
    priority: 'High',
    description:
      'Manage your registration numbers, business address, and company logo.',
    address: 'Uttara Model Town or simply Uttara',
    estimatrd: '',
  },
  {
    id: 2,
    status: 'Active',
    customer: 'Mr. Tom',
    priority: 'High',
    description:
      'Manage your registration numbers, business address, and company logo.',
    address: 'Uttara Model Town or simply Uttara',
    estimatrd: '',
  },
  {
    id: 3,
    status: 'Active',
    customer: 'Mr. Tom',
    priority: 'High',
    description:
      'Manage your registration numbers, business address, and company logo.',
    address: 'Uttara Model Town or simply Uttara',
    estimatrd: '',
  },
  {
    id: 4,
    status: 'Active',
    customer: 'Mr. Tom',
    priority: 'High',
    description:
      'Manage your registration numbers, business address, and company logo.',
    address: 'Uttara Model Town or simply Uttara',
    estimatrd: '',
  },
];

const statusOptions = [
  {label: 'Active', value: 'active'},
  {label: 'Pending', value: 'pending'},
  {label: 'Completed', value: 'completed'},
];

const JobsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const handleReset = () => {
    setSearch('');
    setStatus(null);
  };

  const handleGo = () => {
    // search logic
  };

  const renderJob = ({item}: any) => (
    <View style={styles.jobCard}>
      <Text style={[styles.jobTitle, {width: wp(20)}]}>{item.id}</Text>
      <Text style={[styles.jobText, {width: wp(30)}]}>{item.description}</Text>
      <Text style={[styles.jobText, {width: wp(25)}]}>{item.customer}</Text>
      <Text style={[styles.jobText, {width: wp(35)}]}>{item.address}</Text>
      <Text style={[styles.jobText, {width: wp(20)}]}>{item.priority}</Text>
      <Text style={[styles.jobText, {width: wp(20)}]}>{item.status}</Text>
      <Text style={[styles.jobText, {width: wp(25)}]}>{item.estimated}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <CustomHeader
        title="Jobs"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />
      <View style={styles.container}>
        {/* Filter Row */}
        <View style={styles.filterRow}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
          <Dropdown
            style={styles.dropdown}
            data={statusOptions}
            labelField="label"
            valueField="value"
            placeholder="Status"
            value={status}
            onChange={item => setStatus(item.value)}
          />
          <TouchableOpacity style={styles.goButton} onPress={handleGo}>
            <Text style={styles.goText}>Go</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {/* Table Header */}
        {/* <ScrollView horizontal>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { width: wp(20) }]}>#ID</Text>
          <Text style={[styles.headerText, { width: wp(30) }]}>Description</Text>
          <Text style={[styles.headerText, { width: wp(25) }]}>Customer</Text>
          <Text style={[styles.headerText, { width: wp(35) }]}>Address</Text>
          <Text style={[styles.headerText, { width: wp(20) }]}>Priority</Text>
          <Text style={[styles.headerText, { width: wp(20) }]}>Status</Text>
          <Text style={[styles.headerText, { width: wp(25) }]}>Estimatrd</Text>
        </View>
      </ScrollView> */}

        {/* Table Data */}
        {/* <ScrollView horizontal>
        <FlatList
          data={jobsData}
          renderItem={renderJob}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No matching records found</Text>
          }
        />
      </ScrollView> */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {jobsData.map((item, index) => (
            <Animatable.View
              key={index}
              animation="zoomIn"
              delay={index * 300}
              duration={600}
              useNativeDriver>
              <TouchableOpacity style={styles.card}>
                <View style={styles.card_content}>
                  <Text style={[styles.card_text]}>ID: {item.id}</Text>
                  <Text style={[styles.card_text]}>Status: {item.status}</Text>
                </View>
                <Text style={[styles.card_text]}>
                  Customer: {item.customer}
                </Text>
                <Text style={styles.card_text}>
                  Description: {item.description}
                </Text>
                <Text style={[styles.card_text]}>
                  Priority: {item.priority}
                </Text>
                <Text style={styles.card_text}>Address: {item.address}</Text>
                <Text style={styles.card_text}>
                  Estimatrd: {item.estimatrd}
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </ScrollView>

        {/* Add Job Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateJobs');
          }}
          style={styles.addJobBtn}>
          <PlusCircle size={18} color="white" />
          <Text style={styles.addJobText}>Add Job</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JobsScreen;
