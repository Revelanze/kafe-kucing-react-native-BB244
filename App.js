import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Catnip Latte', harga: 23000 },
  { id: '2', nama: 'Matcha Paw Cappucino', harga: 25000 },
  { id: '3', nama: 'Sandwich Ikan Tuna', harga: 20000 },
];

export default function App() {
  // State global: total seluruh item yang sudah dipesan
  const [totalPesanan, setTotalPesanan] = useState(0);

  // Callback yang dikirim ke child lewat props
  const handleTambahPesanan = () => {
    setTotalPesanan((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kafe Kucing</Text>
        <Text style={styles.headerSubtitle}>Pilih Menu Favoritmu :D</Text>
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <ScrollView contentContainerStyle={styles.list}>
        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahPesanan}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },
  header: {
    backgroundColor: '#e28945',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#FFFFFF' 
  },
  headerSubtitle: { 
    fontSize: 14, 
    color: '#F5E1CE', 
    marginTop: 4 
  },
  list: { 
    padding: 16 
  },

});
