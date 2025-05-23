

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  SectionList
} from 'react-native';
import {
  Plus,
  ArrowLeft,
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
import Avatar from '../../components/Avatar/Avatar';
import Color from '../../theme/Colors';

const usaNames = [
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
  'Joseph White',
  'Isabella Harris',
  'David Martin',
  'Mia Lewis',
  'Charles Allen',
  'Amelia Young',
  'Thomas King',
  'Evelyn Wright',
  'Daniel Scott',
  'Harper Green',
];

const usaAddresses = [
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
  '888 Walnut Rd, Forestville, MI 48823',
  '999 Oak Ct, Meadowbrook, AZ 85001',
  '111 Pine St, Springville, IL 60601',
  '222 Elm Ave, Summerville, SC 29483',
  '333 Maple Ln, Autumnville, VA 22030',
  '444 Willow Dr, Winterville, LA 71201',
  '555 Birch Ct, Highland, UT 84003',
  '666 Cedar St, Lowland, OR 97201',
  '777 Spruce Ave, Coastville, ME 04000',
  '888 Cherry Ln, Plainview, KS 66000',
];

const usaCompanies = [
  'GlobalTech Inc',
  'Innovate Solutions',
  'Pioneer Corp',
  'Summit Group',
  'Vanguard Industries',
  'Apex Systems',
  'Zenith Technologies',
  'Horizon Enterprises',
  'Synergy Group',
  'Quantum Corp',
  'United Innovations',
  'Millennium Group',
  'Nova Systems',
  'Celestial Corp',
  'Infinity Solutions',
  'Prime Industries',
  'Stellar Technologies',
  'Everest Group',
  'Capstone Corp',
  'Foundation Inc',
];

const generateUSJobs = (count = 20) => {
  const usJobs = Array.from({length: count}).map((_, index) => ({
    company:
      index % 2 === 0
        ? usaCompanies[Math.floor(Math.random() * usaCompanies.length)]
        : '',
    name: usaNames[Math.floor(Math.random() * usaNames.length)],
    address: usaAddresses[Math.floor(Math.random() * usaAddresses.length)],
  }));
  return usJobs;
};

const allJobs = generateUSJobs(100);

const PAGE_SIZE = 20;

const Customers = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [search, setSearch] = useState('');
  const [groupedJobs, setGroupedJobs] = useState<{[key: string]: any[]}>([]); 
  const [sectionOrder, setSectionOrder] = useState<string[]>([]);

  useEffect(() => {
    const sortedJobs = [...allJobs].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    const grouped = sortedJobs.reduce((acc, job) => {
      const firstChar = job.name.charAt(0).toUpperCase();
      acc[firstChar] = acc[firstChar] || [];
      acc[firstChar].push(job);
      return acc;
    }, {});

    setGroupedJobs(grouped);
    setSectionOrder(Object.keys(grouped).sort());
  }, []);

  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.card}>
      <Avatar
        name={item.name}
        colors={[Color.primaryBGColor, '#008080']}
        size={50}
      />
      <View style={{marginLeft: 0}}>
        <View style={styles.card_content}>
          <Text style={styles.card_name_text}>{item.name}</Text>
        </View>
        {item.company !== '' && (
          <View style={[styles.card_content, {marginTop: 7}]}>
            <Text style={styles.card_text}>{item.company}</Text>
          </View>
        )}
        <View style={[styles.card_content, {marginTop: 7}]}>
          <Text style={[styles.card_text, {width: wp(65)}]}>
            {item.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section: {title}}: any) => (
    <View style={styles.header}>
      <Text style={styles.header1Text}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="Customers"
        fontSize={hp(2.2)}
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
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
        <View style={styles.addJobBtn}>
          <Text style={styles.addJobText}>Add Customer</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CustomersCreate');
            }}>
            <Plus size={24} color={Color.textPrimaryColor} />
          </TouchableOpacity>
        </View>

        <SectionList
          sections={sectionOrder.map(title => ({
            title,
            data: groupedJobs[title],
          }))}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled
        />
      </View>
    </SafeAreaView>
  );
};



export default Customers;