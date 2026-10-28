import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  // State mandiri: jumlah pesanan khusus menu ini
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty(qty + 1);   // naikkan state lokal (props tidak dimodifikasi)
    onTambahPesanan(); // beri tahu parent agar totalPesanan +1
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>
      <Button title="Tambah Pesanan" color="#8B5E3C" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  info: { 
    flex: 1,
    marginRight: 12 },
  nama: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#3E2A1A' },
  harga: { 
    fontSize: 14, 
    color: '#6B4F3A', 
    marginTop: 4 },
  qty: { 
    fontSize: 13, 
    color: '#9A7B63', 
    marginTop: 4 },
});
