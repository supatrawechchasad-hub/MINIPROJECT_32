// app/(tabs)/history.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect, router } from 'expo-router'; // คำสั่งสำคัญ!
import { HISTORY_LIST } from '../data'; // ดึงข้อมูลประวัติมา

export default function HistoryScreen() {
  const [history, setHistory] = useState<any[]>([]);

  // ฟังก์ชันนี้จะทำงานทุกครั้งที่ "เปิดหน้านี้ขึ้นมาดู"
  useFocusEffect(
    useCallback(() => {
      // ดึงข้อมูลล่าสุดจาก HISTORY_LIST มาใส่ในตัวแปร history
      setHistory([...HISTORY_LIST]); 
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🕒 อ่านล่าสุด</Text>

      {history.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={{ color: 'gray' }}>ยังไม่มีประวัติการอ่าน</Text>
          <Text style={{ color: 'gray' }}>ลองไปอ่านการ์ตูนดูสิ!</Text>
        </View>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item) => item.comicId.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.row}
              // กดแล้วเด้งไปหน้ารายละเอียดเรื่องนั้น
              onPress={() => router.push({ pathname: '/detail', params: { id: item.comicId } })}
            >
              <Image source={{ uri: item.coverImage }} style={styles.smallCover} />
              <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.title}>{item.comicTitle}</Text>
                <Text style={styles.subTitle}>อ่านถึง: {item.episodeTitle}</Text>
                <Text style={styles.time}>เมื่อ: {item.readAt}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
  row: { flexDirection: 'row', marginBottom: 15, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10 },
  smallCover: { width: 60, height: 80, borderRadius: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subTitle: { fontSize: 14, color: '#555', marginTop: 5 },
  time: { fontSize: 12, color: '#999', marginTop: 5 },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});