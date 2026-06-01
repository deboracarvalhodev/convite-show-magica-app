import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles/Styles';

import Footer from './Footer'

const EVENT_DATE_BR = 'Sábado • 15/08/2026 • 20h';

export default function ShowDetails() {
  return (
    <View>
      <ImageBackground
        source={require('../assets/background-retrato.png')}
        style={styles.magicImage}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          O Grande Rubine
        </Text>

        <Text style={styles.detailsText}>
          Mestre do ilusionismo, O Grande Rubine já encantou plateias ao redor do mundo com truques que desafiam a lógica e a realidade.
        </Text>
      </View>

      <Image
        source={require('../assets/background-teatro.jpg')}
        style={styles.theaterImage}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>
          No Teatro Arcano
        </Text>

        <Text style={styles.detailsText}>
          Pela primeira vez, Rubine nos presenteia com uma noite única de espetáculo no Teatro Arcano.
        </Text>

        <View style={styles.infoBox}>
          <Ionicons name="location-outline" size={18} color={COLORS.accent} />
          <Text style={styles.infoText}>
            Teatro Arcano - Rua das Flores, 221, SP
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="time-outline" size={18} color={COLORS.accent} />
          <Text style={styles.infoText}>
            {EVENT_DATE_BR}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Compre seu ingresso na aba "Ingresso"')}
        >
          <Text style={styles.buttonText}>
            Garantir meu ingresso
          </Text>
        </TouchableOpacity>
      </View>

      <Footer />

    </View>
  );
}