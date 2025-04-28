import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const SignaturePad = ({ signature, setSignature }) => {
  const sigRef = useRef<SignatureCapture | null>(null);

  const handleClear = () => {
    if (sigRef.current) {
      sigRef.current.clearSignature();
      setSignature(null); //  Also update the parent component's state
    }
  };


    useEffect(() => {
    return () => {
      // You might need to release resources or perform cleanup here.
      // For example, if the SignatureCapture library has a dispose method,
      // you could call it here:
      // if (sigRef.current) {
      //   sigRef.current.dispose(); // If such a method exists
      // }
    };
  }, []);

  return (
    <View style={{ marginVertical: 10 }}>
      <SignatureCapture
        ref={sigRef} // Attach the ref
        style={{ height: 150, borderWidth: 1, borderColor: '#ddd' }}
        onSaveEvent={{}}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitle={false}
      />
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
     
        <TouchableOpacity
          style={{
            backgroundColor: '#e2e8f0',
            padding: 10,
            alignItems: 'center',
            flex: 1,
            marginVertical:7
          }}
          onPress={handleClear}
        >
          <Text style={{ color: '#000',fontSize:17 }}>Clear Signature</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignaturePad;

