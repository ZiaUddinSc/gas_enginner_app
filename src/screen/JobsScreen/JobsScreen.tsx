
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
  MapPin,
} from 'lucide-react-native';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import DateIcon from '../../components/DateIcon/DateIcon';

const allJobs = Array.from({length: 100}).map((_, index) => ({
  title: `Test ${index}`,
  customer: `Mr. Tom ${index + 1}`,
  address: `Uttara ${index + 1}`,
}));

const PAGE_SIZE = 20;

const JobsScreen = () => {
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
    <Animatable.View
      key={index}
      animation="zoomIn"
      delay={index % 5 * 100} // Adjust delay as needed
      duration={600}
      useNativeDriver>
      <TouchableOpacity style={styles.card}>
        <Text style={[styles.card_title]}>{item.title}</Text>
        <View style={styles.line} />
        <View style={styles.card_row}>
          <View>
            <View style={styles.card_content}>
              <User size={24} />
              <Text style={[styles.card_name]}>{item.customer}</Text>
            </View>
            <View style={styles.card_content}>
              <MapPin size={24} />
              <Text style={styles.card_text}>{item.address}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <DateIcon
              topColor={index % 2 === 0 ? '#ffec9c' : '#8A98C7'}
              textColor={index % 2 === 0 ? '#ffec9c' : '#8A98C7'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animatable.View>
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
          <TouchableOpacity style={styles.searchIcon}>
            <Search size={20} />
          </TouchableOpacity>
        </View>

        {/* Table Data using FlatList */}
       <FlatList
                 data={visibleJobs}
                 keyExtractor={(item, index) => index.toString()}
                 renderItem={renderItem}
                 onEndReached={handleLoadMore}
                 onEndReachedThreshold={0.5} // Load when 50% from bottom
               />

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
