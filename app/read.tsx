// app/read.tsx
import React, { useEffect } from 'react'; // 1. เพิ่ม useEffect
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { COMICS, addToHistory } from './data'; // 2. เพิ่ม addToHistory

export default function ReadScreen() {
  const params = useLocalSearchParams();
  const comicId = params.comicId;
  const episodeId = params.episodeId;

  console.log("กำลังค้นหา...");
  console.log("Comic ID ที่ได้รับ:", comicId);
  console.log("Episode ID ที่ได้รับ:", episodeId);

  const comic = COMICS.find(c => c.id.toString() === comicId?.toString());
  const episode = comic?.episodes?.find(e => e.id.toString() === episodeId?.toString());

  // --- 3. ส่วนบันทึกประวัติ (ทำงานเมื่อเปิดหน้าอ่านเจอ) ---
  useEffect(() => {
    if (comic && episodeId) {
      console.log(`✅ บันทึกประวัติ: ${comic.title} ตอนที่ ${episodeId}`);
      addToHistory(comic, episodeId.toString());
    }
  }, [comicId, episodeId]);
  // ----------------------------------------------------

  if (!episode) {
    return (
      <View style={styles.errorContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <Text style={{ color: 'white', fontSize: 18 }}>❌ ปิด</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>
          ไม่พบตอนที่ระบุ
          {'\n\n'}
          (Debug: Comic={comicId}, Ep={episodeId})
        </Text>
      </View>
    );
  }

  return (
    // หนูตั้ง background เป็น white พี่เลยต้องปรับสีตัวอักษรให้เข้มขึ้นนะ ไม่งั้นมองไม่เห็น
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
        <Text style={{ color: 'white', fontSize: 18 }}>❌ ปิด</Text>
      </TouchableOpacity>

      <ScrollView>
         {/* เปลี่ยนสี Title เป็นสีดำ เพราะพื้นหลังเป็นสีขาว */}
         <Text style={styles.title}>{episode.title}</Text>
         
         {episode.images.map((img, index) => (
           <View key={index} style={{width: "100%"}}>
             <Image 
              source={{ uri: img }} 
              style={styles.page} 
              resizeMode="stretch" 
             />
           </View>
         ))}
         
         <Text style={styles.end}>-- จบตอน --</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  closeBtn: { position: 'absolute', top: 50, right: 20, zIndex: 10, padding: 5, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5 },
  
  // แก้สี Title เป็นสีดำ (เพราะหนูใช้พื้นหลังขาว)
  title: { color: 'black', textAlign: 'center', marginTop: 80, marginBottom: 20, fontSize: 20, fontWeight: 'bold' },
  
  page: { width: '100%', height: 900 },
  end: { color: 'gray', textAlign: 'center', margin: 40 },
  errorContainer: { flex: 1, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'white', fontSize: 16, textAlign: 'center' }
});