// FileUpload.tsx

import React, { useEffect, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from '@react-native-documents/picker';
import { CloudUpload, X } from 'lucide-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });

      if (files.length + result.length > 10) {
        Alert.alert('Limit Exceeded', 'You can only upload up to 10 files.');
        return;
      }

      setFiles([...files, ...result]);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        Alert.alert('Error', 'Failed to pick files.');
        console.error(err);
      }
    }
  };

  const removeFile = index => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <TouchableOpacity style={styles.uploadArea} onPress={handleFileUpload}>
        <CloudUpload size={36} color="#666" />
        <Text style={styles.uploadText}>Drop files here or click to upload.</Text>
        <Text style={styles.subText}>
          Upload maximum 10 files. Allowed file types are images, excel, document, & PDF.
        </Text>
      </TouchableOpacity>

      {files.length > 0 && (
        <View style={styles.fileList}>
          {files.map((file, index) => (
            <View key={index} style={styles.fileItem}>
              <Text style={styles.fileName} numberOfLines={1}>
                {file.name}
              </Text>
              <TouchableOpacity onPress={() => removeFile(index)}>
                <X size={18} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    color: '#2c3e50',
    fontSize: hp(1.8),
    fontWeight: '700',
    marginBottom: hp(1),
},
  uploadArea: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#b0b0b0',
    borderRadius: 6,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  uploadText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#444',
    marginTop: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 13,
    color: '#777',
    marginTop: 8,
    textAlign: 'center',
  },
  fileList: {
    marginTop: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  fileName: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default FileUpload;
