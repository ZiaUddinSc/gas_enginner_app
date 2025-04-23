import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

const DateIcon = (props) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonthShort, setCurrentMonthShort] = useState('');

  useEffect(() => {
    const updateDate = () => {

      setCurrentDate(moment().format('DD'));
      setCurrentMonthShort(moment().format('MMM').toUpperCase());
    };

    updateDate(); 

    const intervalId = setInterval(updateDate, 60 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.monthContainer,{backgroundColor:props.topColor}]}>
        <Text style={styles.monthText}>{currentMonthShort}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={[styles.dateText,{color:props.textColor}]}>{currentDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60, // আইকনের আনুমানিক প্রস্থ
    height: 60, // আইকনের আনুমানিক উচ্চতা
    borderRadius: 8,
    backgroundColor: '#8A98C7', // উপরের অংশের হালকা বেগুনী রঙ
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // ভেতরের অংশ বাইরের দিকে উপচে পড়া রোধ করবে
  },
  monthContainer: {
    backgroundColor: '#8A98C7', 
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateContainer: {
    backgroundColor: '#E0E8F9', 
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#4C566A',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DateIcon;