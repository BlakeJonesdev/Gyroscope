import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gyroscope, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

export default function App() {
  setUpdateIntervalForType(SensorTypes.gyroscope, 100);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const subscription = gyroscope.subscribe(({ x, y, z, timestamp }) => {
    setX(x.toFixed(4));
    setY(y.toFixed(4));
    setZ(z.toFixed(4));
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Gyroscope Test</Text>
      </View>
      <View style={styles.valueArea}>
        <Text style={styles.label}>X = {x} (rad/s)</Text>
        <Text style={styles.label}>Y = {y} (rad/s)</Text>
        <Text style={styles.label}>Z = {z} (rad/s)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleArea: {
    alignItems: 'center',
    paddingVertical: 20
  },
  valueArea: {
    flex: 1,
    paddingHorizontal: 20
  }
  ,
  title: {
    fontSize: 30
  },
  label: {
    fontSize: 20
  }
});
