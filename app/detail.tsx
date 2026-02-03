// app/detail.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { COMICS } from './data';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams(); // รับค่า ID การ์ตูนมา
  const comic = COMICS.find(c => c.id.toString() === id);

  if (!comic) return <Text>ไม่พบข้อมูล</Text>;

  return (
    <View style={styles.container}>
      
      {/* --- ส่วนที่เพิ่ม: แถบเมนูด้านบน + ปุ่มย้อนกลับ --- */}
      <SafeAreaView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#000" />
          <Text style={styles.backText}>ย้อนกลับ</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* ------------------------------------------- */}

      <ScrollView>
        {/* ส่วนบน: ปกและรายละเอียด */}
        <View style={styles.infoSection}>
          <Image source={{ uri: comic.coverImage }} style={styles.cover} />
          <Text style={styles.title}>{comic.title}</Text>
          <Text style={styles.author}>เรื่อง/ภาพ: {comic.author}</Text>
          <Text style={styles.desc}>{comic.description}</Text>
        </View>

        {/* ส่วนล่าง: รายการตอน (Episode List) */}
        <View style={styles.episodeSection}>
           <Text style={styles.sectionHeader}>รายการตอน ({comic.episodes.length})</Text>
           
           {comic.episodes.map((ep) => (
             <TouchableOpacity 
                key={ep.id} 
                style={styles.episodeItem}
                // กดแล้วส่งไปหน้าอ่าน
                onPress={() => router.push({ 
                  pathname: '/read', 
                  params: { comicId: comic.id, episodeId: ep.id } 
                })}
             >
               <Image source={{ uri: ep.thumbnail }} style={styles.epThumb} />
               <View style={styles.epInfo}>
                 <Text style={styles.epTitle}>{ep.title}</Text>
                 <Text style={styles.epDate}>{ep.date}</Text>
               </View>
               <Ionicons name="chevron-forward" size={20} color="#ccc" />
             </TouchableOpacity>
           ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  // --- Style สำหรับปุ่มย้อนกลับ ---
  headerContainer: {
    backgroundColor: '#fff',
    zIndex: 10, // ให้ลอยอยู่ชั้นบนสุด
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 40, // เผื่อพื้นที่ติ่งหน้าจอ (ถ้าเครื่องไหนไม่มี SafeAreaView)
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  // -----------------------------

  infoSection: { padding: 20, alignItems: 'center', borderBottomWidth: 10, borderBottomColor: '#f5f5f5' },
  cover: { width: 120, height: 160, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  author: { fontSize: 14, color: '#666', marginBottom: 10 },
  desc: { textAlign: 'center', color: '#444' },
  episodeSection: { padding: 15 },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  episodeItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10 },
  epThumb: { width: 80, height: 60, borderRadius: 4, marginRight: 10 },
  epInfo: { flex: 1 },
  epTitle: { fontSize: 16, fontWeight: '500' },
  epDate: { fontSize: 12, color: '#999', marginTop: 4 }
});