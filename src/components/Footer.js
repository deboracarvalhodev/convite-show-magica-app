import React from 'react';
import { View, Text, } from 'react-native';

import styles from '../styles/Styles';

export default function Footer() {
  return (
    <View>
      <View style={styles.divider} />

      <Text style={styles.footer}>
        © 2026 Teatro Arcano • Todos os direitos reservados
      </Text>
    </View>
  );
}
