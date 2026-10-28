import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.box}>
      <Text style={styles.total}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promo}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  total: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#3E2A1A' 
  },
  promo: { 
    marginTop: 8, 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#2E7D32' },
});
