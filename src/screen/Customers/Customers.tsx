// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView, // Added ScrollView
// } from 'react-native';
// import {
//   PlusCircle,
//   ChevronLeft,
//   ChevronRight,
//   MapPin,
//   ArrowLeft,
//   LogOut,
//   Search,
//   User,
//   Building,
// } from 'lucide-react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import styles from './styles';
// import CustomHeader from '../../components/CustomHeader/CustomHeader';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
// import * as Animatable from 'react-native-animatable';

// const jobsData = [
//   {
//     company: '',
//     name: 'Mr. Tom',
//     address: 'Uttara Model Town or simply Uttara',
//   },
//   {
//     company: '',
//     name: 'Mr. Tom',
//     address: 'Uttara Model Town or simply Uttara',
//   },
//   {
//     company: '',
//     name: 'Mr. Tom',
//     address: 'Uttara Model Town or simply Uttara',
//   },
//   {
//     company: 'Test',
//     name: 'Mr. Tom',
//     address: 'Uttara Model Town or simply Uttara',
//   },
// ];

// const Customers = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<any>>();
//   const [search, setSearch] = useState('');

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header */}
//       <CustomHeader
//         title="Customers"
//         leftIcon={<ArrowLeft size={24} color="white" />}
//         onLeftPress={() => navigation.goBack()}
//         rightIcon1={<LogOut size={24} color="white" />}
//       />
//       <View style={styles.container}>
//         {/* Filter Row */}
//         <View style={styles.filterRow}>
//           <TextInput
//             style={styles.input}
//             placeholder="Search..."
//             value={search}
//             onChangeText={setSearch}
//           />
//           <TouchableOpacity style={styles.searchIcon}>
//             <Search size={20} />
//           </TouchableOpacity>
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {jobsData.map((item, index) => (
//             <Animatable.View
//               key={index}
//               animation="zoomIn"
//               delay={index * 300}
//               duration={600}
//               useNativeDriver>
//               <TouchableOpacity style={styles.card}>
//                 <View style={styles.card_content}>
//                   <User size={24} />
//                   <Text style={[styles.card_name_text]}>{item.name}</Text>
//                 </View>
//                 {item.company && (
//                   <View style={[styles.card_content, {marginTop: 7}]}>
//                     <Building size={22} />
//                     <Text style={[styles.card_text]}>{item.company}</Text>
//                   </View>
//                 )}
//                 <View style={[styles.card_content, {marginTop: 7}]}>
//                   <MapPin size={24} />
//                   <Text style={styles.card_text}>{item.address}</Text>
//                 </View>
//               </TouchableOpacity>
//             </Animatable.View>
//           ))}
//         </ScrollView>

//         {/* Add Job Button */}
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('CustomersCreate');
//           }}
//           style={styles.addJobBtn}>
//           <PlusCircle size={18} color="white" />
//           <Text style={styles.addJobText}>Add Customer</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Customers;


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  PlusCircle,
  ArrowLeft,
  LogOut,
  Search,
  User,
  Building,
  MapPin,
} from 'lucide-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const allJobs = Array.from({length: 100}).map((_, index) => ({
  company: index % 2 === 0 ? `Company ${index}` : '',
  name: `Mr. Tom ${index + 1}`,
  address: `Uttara ${index + 1}`,
}));

const PAGE_SIZE = 20;

const Customers = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [search, setSearch] = useState('');
  const [visibleJobs, setVisibleJobs] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadJobs();
  }, [page]);

  const loadJobs = () => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const newItems = allJobs.slice(start, end);
    setVisibleJobs(prev => [...prev, ...newItems]);
  };

  const handleLoadMore = () => {
    if (visibleJobs.length < allJobs.length) {
      setPage(prev => prev + 1);
    }
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.card_content}>
        <User size={24} />
        <Text style={styles.card_name_text}>{item.name}</Text>
      </View>
      {item.company !== '' && (
        <View style={[styles.card_content, {marginTop: 7}]}>
          <Building size={22} />
          <Text style={styles.card_text}>{item.company}</Text>
        </View>
      )}
      <View style={[styles.card_content, {marginTop: 7}]}>
        <MapPin size={24} />
        <Text style={styles.card_text}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Customers"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />
      <View style={styles.container}>
        <View style={styles.filterRow}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Search size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={visibleJobs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5} // Load when 50% from bottom
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CustomersCreate');
          }}
          style={styles.addJobBtn}>
          <PlusCircle size={18} color="white" />
          <Text style={styles.addJobText}>Add Customer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Customers;
