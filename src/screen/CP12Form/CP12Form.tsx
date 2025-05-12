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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ArrowLeft, User, ChevronRight} from 'lucide-react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/native';

const CP12Form = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  const applianceData = route.params?.applianceData;
  const titleData = route.params?.titleData;
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const totalQuestions = 8;
  //   alert(JSON.stringify(route.params));
  const [signature, setSignature] = useState(null);
  const [todayDate, setTodayDate] = useState(new Date());
  const [nextInspectionDate, setNextInspectionDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  );
  const [receivedBy, setReceivedBy] = useState('Mr. John Doe');

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
        title={titleData}
        leftIcon={<ArrowLeft size={24} color="white" />}
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        {titleData === 'CP12 Homeowner Gas Safety Record' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}

            <ApplianceAndInspections
              onPress={() => navigation.navigate('AddAppliance')}
            />

            {/* Safety Checks */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Safety Checks</Text>
              <View style={styles.safety_content}>
                <Text style={styles.safety_questionsAnswered}>
                  QUESTIONS ANSWERED
                </Text>
                <Text style={[styles.safety_progress]}>
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
                <Text style={[styles.safety_progress, {textAlign: 'right'}]}>
                  {questionsAnswered}/4
                </Text>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0, width: '90%'}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : titleData === 'CP12 Landlord Gas Safety Record' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}

            <ApplianceAndInspections
              onPress={() => navigation.navigate('AddAppliance')}
            />

            {/* Safety Checks */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Safety Checks</Text>
              <View style={styles.safety_content}>
                <Text style={styles.safety_questionsAnswered}>
                  QUESTIONS ANSWERED
                </Text>
                <Text style={[styles.safety_progress, {textAlign: 'right'}]}>
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
                <Text style={[styles.safety_progress, {textAlign: 'right'}]}>
                  {questionsAnswered}/4
                </Text>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : titleData === 'CP14 Gas Warning Notice' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Appliance & Inspections</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CP14AddAppliance')}
                style={[styles.safety_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Appliance'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.safety_progress}>N/A</Text>
                  <ChevronRight size={20} />
                </View>
              </TouchableOpacity>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : titleData === 'Service / Maintenance Record' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Appliance & Inspections</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ServiceAddAppliance')}
                style={[styles.safety_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Appliance'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.safety_progress}>N/A</Text>
                  <ChevronRight size={20} />
                </View>
              </TouchableOpacity>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : titleData === 'Gas Breakdown Record' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Appliance & Inspections</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('GasBreakdownAddAppliance')}
                style={[styles.safety_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Appliance'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.safety_progress}>N/A</Text>
                  <ChevronRight size={20} />
                </View>
              </TouchableOpacity>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : titleData === 'Gas Boiler System Commissioning Checklist' ? (
          <>
            {/* Linked Job */}
            <LinkedJobSelector onSelectJob={handleJobSelection} />

            {/* Customer Details */}

            <CustomerSelector onSelectCustomer={handleCustomerlection} />

            {/* Appliance & Inspections */}
            <View style={styles.safety_container}>
              <Text style={styles.title}>Appliance & Inspections</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('GasBoilerAddAppliance')}
                style={[styles.safety_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Appliance'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.safety_progress}>N/A</Text>
                  <ChevronRight size={20} />
                </View>
              </TouchableOpacity>
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
              <View style={[styles.safety_content, {marginTop: hp(1)}]}>
                <DatePicker
                  label="NEXT INSPECTION DATE"
                  date={nextInspectionDate}
                  onDateChange={setNextInspectionDate}
                />
              </View>
              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={[styles.inputLabel, {marginBottom: 1}]}>
                  RECEIVED BY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={[styles.input, {padding: 0}]}
                    value=""
                    onChangeText={setReceivedBy} // Update state on text change
                    placeholder="Enter Name" // Added placeholder for better UX
                    placeholderTextColor="#7f8c8d"
                  />
                  <User size={20} />
                </View>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Relation'.toUpperCase()}
                </Text>
                <Text style={styles.safety_progress}>N/A</Text>
              </View>

              <View style={[styles.rece_content, {marginTop: hp(1)}]}>
                <Text style={styles.safety_questionsAnswered}>
                  {'Signature'.toUpperCase()}
                </Text>
                {/* <SignaturePad signature={signature} setSignature={setSignature} /> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignatureScreen')}
                  style={[
                    styles.create_button,
                    {backgroundColor: '#e2e8f0', marginBottom: 0},
                  ]}>
                  <Text
                    style={{color: '#000', fontSize: hp(2), fontWeight: '800'}}>
                    Add Signature
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : null}
        <TouchableOpacity style={styles.create_button}>
          <Text style={{color: '#FFF', fontSize: hp(2), fontWeight: '800'}}>
            Create Certificate
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CP12Form;
