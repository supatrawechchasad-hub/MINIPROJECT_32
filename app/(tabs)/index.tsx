import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { COMICS } from '../data'; // ดึงข้อมูลมาใช้

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔥 การ์ตูนแนะนำ</Text>
      <FlatList
        data={COMICS}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            // แก้บรรทัด onPress ให้เป็นแบบนี้ (ชี้ไปที่ /detail)
            onPress={() => router.push({ pathname: '/detail', params: { id: item.id } })}
          >
            <Image source={{ uri: item.coverImage }} style={styles.cover} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  card: { flex: 1, margin: 5, alignItems: 'center' },
  cover: { width: 150, height: 200, borderRadius: 10 },
  title: { marginTop: 5, fontWeight: 'bold' }
});