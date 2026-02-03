// app/(tabs)/profile.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // ตัวช่วยเลือกรูป
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  // 1. สร้างตัวแปร (State) เก็บข้อมูล
  const [name, setName] = useState('น้องมายด์ นักอ่าน'); // ชื่อเริ่มต้น
  const [image, setImage] = useState('https://via.placeholder.com/150'); // รูปเริ่มต้น
  const [isEditing, setIsEditing] = useState(false); // สถานะ: กำลังแก้ไขอยู่ไหม?

  // ฟังก์ชัน: เลือกรูปจากเครื่อง
  const pickImage = async () => {
    // ขออนุญาตเข้าถึงอัลบั้ม
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // บังคับตัดรูปเป็นสี่เหลี่ยมจัตุรัส
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // เอารูปใหม่มาใส่แทน
    }
  };

  // ฟังก์ชัน: กดปุ่มบันทึก
  const handleSave = () => {
    if (name.trim() === "") {
      Alert.alert("แจ้งเตือน", "กรุณาใส่ชื่อด้วยนะคะ");
      return;
    }
    setIsEditing(false); // ปิดโหมดแก้ไข
    Alert.alert("สำเร็จ", "บันทึกข้อมูลเรียบร้อย!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>โปรไฟล์ของฉัน</Text>
      </View>

      <View style={styles.content}>
        {/* --- ส่วนรูปโปรไฟล์ --- */}
        <View style={styles.avatarContainer}>
          <Image source={{ uri: image }} style={styles.avatar} />
          
          {/* ถ้ากำลังแก้ไข ให้โชว์ปุ่มกล้องถ่ายรูป */}
          {isEditing && (
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* --- ส่วนชื่อ --- */}
        {isEditing ? (
          // ถ้าแก้ไข: โชว์ช่องกรอกข้อความ
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName} // พิมพ์ปุ๊บ แก้ค่าปั๊บ
            placeholder="ใส่ชื่อของคุณ..."
          />
        ) : (
          // ถ้าปกติ: โชว์แค่ตัวหนังสือ
          <Text style={styles.name}>{name}</Text>
        )}

        <Text style={styles.email}>mind@webtoon.com</Text>

        {/* --- ปุ่มควบคุม --- */}
        <View style={styles.buttonSection}>
          {isEditing ? (
            // ปุ่มตอนแก้ไข (บันทึก / ยกเลิก)
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleSave}>
                <Text style={styles.btnText}>บันทึก</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={[styles.btn, styles.btnCancel]} onPress={() => setIsEditing(false)}>
                <Text style={styles.btnText}>ยกเลิก</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // ปุ่มตอนปกติ (แก้ไขข้อมูล)
            <TouchableOpacity style={[styles.btn, styles.btnEdit]} onPress={() => setIsEditing(true)}>
              <Text style={styles.btnText}>✏️ แก้ไขข้อมูล</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* เมนูอื่นๆ (เหมือนเดิม) */}
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Ionicons name="wallet-outline" size={24} color="#333" />
            <Text style={styles.menuText}>เหรียญคงเหลือ: 50</Text>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" size={24} color="#333" />
            <Text style={styles.menuText}>ตั้งค่า</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#f9f9f9', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20, alignItems: 'center' },
  
  // Avatar
  avatarContainer: { position: 'relative', marginBottom: 15 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#eee' },
  cameraIcon: { 
    position: 'absolute', bottom: 0, right: 0, 
    backgroundColor: '#2196F3', padding: 8, borderRadius: 20,
    borderWidth: 2, borderColor: '#fff' 
  },

  // Text Info
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  email: { fontSize: 14, color: 'gray', marginBottom: 20 },
  
  // Input Field
  input: { 
    fontSize: 20, fontWeight: 'bold', textAlign: 'center',
    borderBottomWidth: 1, borderColor: '#ccc', width: '80%', padding: 5, marginBottom: 5 
  },

  // Buttons
  buttonSection: { marginBottom: 30, width: '100%', alignItems: 'center' },
  btn: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 25 },
  btnEdit: { backgroundColor: '#333' },
  btnSave: { backgroundColor: '#4CAF50' },
  btnCancel: { backgroundColor: '#F44336' },
  btnText: { color: 'white', fontWeight: 'bold' },

  // Menu
  menu: { width: '100%', gap: 15 },
  menuItem: { 
    flexDirection: 'row', alignItems: 'center', 
    padding: 15, backgroundColor: '#f5f5f5', borderRadius: 12, gap: 15 
  },
  menuText: { fontSize: 16 }
});