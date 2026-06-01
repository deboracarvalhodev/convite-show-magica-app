import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import styles, { COLORS } from '../styles/Styles';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

import { Ionicons } from '@expo/vector-icons';

const EVENT_DATE = new Date('2026-08-15T20:00:00');
const EVENT_DATE_BR = 'Sábado • 15/08/2026 • 20h';

const TICKETS = {
  inteira: 120,
  meia: 60,
  vip: 200,
};

const ticketId = Math.floor(100000 + Math.random() * 900000);

export default function Ingresso() {
  const [quantities, setQuantities] = useState({
    inteira: 0,
    meia: 0,
    vip: 0,
  });

  const [confirmed, setConfirmed] = useState(false);

  const increase = (type) => {
    setQuantities({ ...quantities, [type]: quantities[type] + 1 });
  };

  const decrease = (type) => {
    setQuantities({
      ...quantities,
      [type]: Math.max(0, quantities[type] - 1),
    });
  };

  const total =
    quantities.inteira * TICKETS.inteira +
    quantities.meia * TICKETS.meia +
    quantities.vip * TICKETS.vip;

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          {Object.keys(TICKETS).map((type) => (
            <View key={type} style={styles.ticketCard}>
              <Text style={styles.ticketTitle}>{type.toUpperCase()}</Text>

              <Text style={styles.ticketPrice}>R$ {TICKETS[type]},00</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrease(type)}>
                  <Text style={styles.quantityButton}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantityText}>{quantities[type]}</Text>

                <TouchableOpacity onPress={() => increase(type)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>

              {quantities[type] > 0 && (
                <Text style={styles.subtotal}>
                  {quantities[type]}x = R$ {quantities[type] * TICKETS[type]},00
                </Text>
              )}
            </View>
          ))}

          <Text style={styles.total}>Total: R$ {total},00</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (total === 0) {
                alert('Selecione pelo menos um ingresso');
                return;
              }
              setConfirmed(true);
            }}>
            <Text style={styles.buttonText}>Confirmar presença</Text>
          </TouchableOpacity>

          <View style={styles.countdownHeader}>
            <Ionicons
              name="hourglass-outline"
              size={28}
              color={COLORS.accent}
            />
            <Text style={styles.countdownText}>
              Faltam poucos dias para o espetáculo!
            </Text>
          </View>

          <Countdown eventDate={EVENT_DATE} />

          <Footer />
        </View>
      </ScrollView>

      <Modal visible={confirmed} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setConfirmed(false)}>
              <Ionicons name="close" size={28} color={COLORS.accent} />
            </TouchableOpacity>

            <View style={styles.ticketPreview}>
              <Image
                source={require('../assets/banner-evento.png')}
                style={styles.ticketBanner}
              />

              <View style={styles.ticketContent}>
                <Text style={styles.ticketId}>ID: #{ticketId}</Text>
                
                <Text style={styles.ticketName}>Rubine: O Espetáculo</Text>

                <View style={styles.infoBox}>
                  <Ionicons
                    name="location-outline"
                    size={18}
                    color={COLORS.accent}
                  />
                  <Text style={styles.infoText}>
                    Teatro Arcano - Rua das Flores, 221, SP
                  </Text>
                </View>

                <View style={styles.infoBox}>
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={COLORS.accent}
                  />
                  <Text style={styles.infoText}>{EVENT_DATE_BR}</Text>
                </View>
              </View>

              <View style={styles.ticketDivider} />

              <View style={styles.barcodeContainer}>
                <Image
                  source={require('../assets/barcode.png')}
                  style={styles.barcode}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
