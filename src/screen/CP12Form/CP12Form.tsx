import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import LinkedJobSelector from '../../components/LinkedJobSelector';
import CustomerSelector from '../../components/CustomerSelector';
import ApplianceAndInspections from '../../components/ApplianceAndInspections';
import SignaturePad from '../../components/SignaturePad';
import DatePicker from '../../components/DatePicker';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Home,
  Save,
  X,
  ArrowLeft,
  LogOut,
  PlusCircle,
  User,
} from 'lucide-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const CP12Form = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const totalQuestions = 8;

  const [comments, setComments] = useState(['', '', '', '']);
  const [signature, setSignature] = useState(null);
  const [todayDate, setTodayDate] = useState(new Date());
  const [nextInspectionDate, setNextInspectionDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  );
  const [receivedBy, setReceivedBy] = useState('Mr. John Doe');
  const [relation, setRelation] = useState('N/A');

  const updateComment = (index, text) => {
    const newComments = [...comments];
    newComments[index] = text;
    setComments(newComments);
  };

  const handleCreateCertificate = () => {
    // Certificate creation logic here
    console.log('Certificate created');
  };

  const handleJobSelection = job => {
    setSelectedJob(job);
    console.log('Selected Job:', job);
  };
  const handleCustomerlection = item => {
    setSelectedJob(item);
    console.log('Selected Customer:', item);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader
        title="CPP12 Gas Safety Record (Landlord/Homeowner)"
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
        rightIcon1={<LogOut size={24} color="white" />}
      />
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {/* Linked Job */}
        <LinkedJobSelector onSelectJob={handleJobSelection} />

        {/* Customer Details */}

        <CustomerSelector onSelectCustomer={handleCustomerlection} />

        {/* Appliance & Inspections */}

        <ApplianceAndInspections />

        {/* Safety Checks */}
        <View style={styles.safety_container}>
          <Text style={styles.title}>Safety Checks</Text>
          <View style={styles.safety_content}>
            <Text style={styles.safety_questionsAnswered}>
              QUESTIONS ANSWERED
            </Text>
            <Text style={styles.safety_progress}>
              {questionsAnswered}/{totalQuestions}
            </Text>
          </View>
        </View>

        {/* Comments */}
        <View style={styles.safety_container}>
          <Text style={styles.title}>Comments</Text>
          <View style={styles.safety_content}>
            <Text style={styles.safety_questionsAnswered}>
              {'Comments'.toUpperCase()}
            </Text>
            <Text style={styles.safety_progress}>{questionsAnswered}/4</Text>
          </View>
        </View>

        {/* Signature Section */}
        <View style={styles.safety_container}>
          <Text style={styles.title}>Signature</Text>
          <View style={styles.safety_content}>
            <DatePicker
              label="TODAY'S DATE"
              date={todayDate}
              onDateChange={setTodayDate}
            />
          </View>
          <View style={[styles.safety_content,{marginTop:hp(1)}]}>
            <DatePicker
              label="NEXT INSPECTION DATE"
              date={nextInspectionDate}
              onDateChange={setNextInspectionDate}
            />
          </View>
          <View style={[styles.safety_content,{marginTop:hp(1)}]}>
          <Text style={styles.inputLabel}>RECEIVED BY</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TextInput
                    style={styles.input}
                    value={receivedBy}
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#b0bec5"
                />
                <User size={24}/>
                </View>
          </View>

          <View style={[styles.safety_content,{marginTop:hp(1)}]}>
            <Text style={styles.safety_questionsAnswered}>
              {'Relation'.toUpperCase()}
            </Text>
            <Text style={styles.safety_progress}>N/A</Text>
          </View>

          <View style={[styles.safety_content,{marginTop:hp(1)}]}>
            <Text style={styles.safety_questionsAnswered}>
              {'Signature'.toUpperCase()}
            </Text>
            <SignaturePad signature={signature} setSignature={setSignature} />
          </View>

          
        </View>
  <TouchableOpacity
          style={styles.create_button}
          
        >
          <Text style={{ color: '#FFF',fontSize:hp(2),fontWeight:'800' }}>Create Certificate</Text>
        </TouchableOpacity>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default CP12Form;
