import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/Styles';

export default function Countdown({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = new Date(eventDate) - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (!timeLeft) {
    return (
      <Text style={styles.title}>
        O espetáculo começou! 🎩✨
      </Text>
    );
  }

  return (
    <View style={styles.countdownContainer}>
      <View style={styles.timeBox}>
        <Text style={styles.timeNumber}>{timeLeft.days}</Text>
        <Text style={styles.timeLabel}>Dias</Text>
      </View>

      <View style={styles.timeBox}>
        <Text style={styles.timeNumber}>{timeLeft.hours}</Text>
        <Text style={styles.timeLabel}>Horas</Text>
      </View>

      <View style={styles.timeBox}>
        <Text style={styles.timeNumber}>{timeLeft.minutes}</Text>
        <Text style={styles.timeLabel}>Min</Text>
      </View>

      <View style={styles.timeBox}>
        <Text style={styles.timeNumber}>{timeLeft.seconds}</Text>
        <Text style={styles.timeLabel}>Seg</Text>
      </View>
    </View>
  );
}