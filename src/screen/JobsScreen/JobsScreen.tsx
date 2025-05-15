import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  ArrowLeft,
  Search,
  Plus,
} from 'lucide-react-native';
import styles from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import DateIcon from '../../components/DateIcon/DateIcon';
import Avatar from '../../components/Avatar/Avatar';
import Color from '../../theme/Colors';
import {widthPercentageToDP as wp,    heightPercentageToDP as hp, } from 'react-native-responsive-screen';

const titles = [
  'CP12 Gas Safety Record (Landlord/Homeowner)',
  'test with emrul',
  'GAS CERTIFICATE',
  'CP12 Gas Safety Record (Landlord/Homeowner)',
  'test with emrul',
  'GAS CERTIFICATE',
  'CP12 Gas Safety Record (Landlord/Homeowner)',
  'test with emrul',
  'GAS CERTIFICATE',
  'CP12 Gas Safety Record (Landlord/Homeowner)',
  
  

];

const customers = [
  'John Smith',
  'Alice Johnson',
  'Robert Williams',
  'Emily Brown',
  'Michael Davis',
  'Olivia Miller',
  'William Wilson',
  'Sophia Moore',
  'James Taylor',
  'Ava Jackson',
];

const addresses = [
  '123 Main St, Anytown, CA 91234',
  '456 Oak Ave, Pleasantville, NY 10570',
  '789 Pine Ln, Sunnyvale, TX 75087',
  '101 Elm Rd, Quietville, OH 43050',
  '222 Maple Dr, Lakeside, FL 32040',
  '333 Willow Ct, Hilltop, PA 19003',
  '444 Birch St, Riverdale, GA 30349',
  '555 Cedar Blvd, Valleyview, WA 98006',
  '666 Spruce Ave, Mountainview, CO 80123',
  '777 Cherry Ln, Oceanview, NC 28469',
];

const generateSimpleRandomJobs = (count = 20) => {
  const randomJobs = Array.from({length: count}).map(() => ({
    title: titles[Math.floor(Math.random() * titles.length)],
    customer: customers[Math.floor(Math.random() * customers.length)],
    address: addresses[Math.floor(Math.random() * addresses.length)],
  }));
  return randomJobs;
};

const allJobs = generateSimpleRandomJobs(100);

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
      delay={(index % 5) * 100} // Adjust delay as needed
      duration={600}
      useNativeDriver>
      <TouchableOpacity style={styles.card}>
        <Text style={[styles.card_title]}>{item.title}</Text>
        <View style={styles.line} />
        <View style={styles.card_row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar
              name={item.customer}
              colors={[Color.primaryBGColor, '#008080']}
              size={50}
            />
            <View style={{ width: wp(50)}}>
              <View style={styles.card_content}>
                
                <Text style={[styles.card_name]}>{item.customer}</Text>
              </View>
              <View style={styles.card_content}>
                
                <Text style={[styles.card_text, {}]}>{item.address}</Text>
              </View>
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
        fontSize={hp(2.2)}
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        {/* Filter Row */}
        <View style={{backgroundColor: '#ddd7d6', padding: wp(2)}}>
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
        </View>
        {/* Add Job Button */}
        <View style={styles.addJobBtn}>
          <Text style={styles.addJobText}>Add Job</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateJobs');
            }}>
            <Plus size={24} color={Color.textPrimaryColor} />
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
      </View>
    </SafeAreaView>
  );
};

export default JobsScreen;
