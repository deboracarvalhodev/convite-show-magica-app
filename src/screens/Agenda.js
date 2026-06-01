import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import styles, { COLORS } from '../styles/Styles';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

import { Ionicons } from '@expo/vector-icons';

const EVENT_DATE = new Date('2026-08-15T20:00:00');
const EVENT_DATE_BR = 'Sábado • 15/08/2026 • 20h';

export default function Agenda() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require('../assets/banner-evento.png')}
        style={styles.banner}
        resizeMode="cover"
      />

      <View style={styles.screen}>
        <Text style={styles.title}>Rubine: o Espetáculo</Text>

        <Text style={styles.detailsText}>
          Prepare-se para uma noite inesquecível com o ilusionista Rubine, onde
          o impossível acontece diante dos seus olhos.
        </Text>

        <View style={styles.infoBox}>
          <Ionicons name="location-outline" size={18} color={COLORS.accent} />
          <Text style={styles.infoText}>
            Teatro Arcano - Rua das Flores, 221, SP
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Ionicons name="time-outline" size={18} color={COLORS.accent} />
          <Text style={styles.infoText}>{EVENT_DATE_BR}</Text>
        </View>

        <View style={styles.countdownHeader}>
          <Ionicons name="hourglass-outline" size={28} color={COLORS.accent} />
          <Text style={styles.countdownText}>
            Faltam poucos dias para o espetáculo!
          </Text>
        </View>

        <Countdown eventDate={EVENT_DATE} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Compre seu ingresso na aba "Ingresso"')}
        >
          <Text style={styles.buttonText}>Garantir meu ingresso</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
}
