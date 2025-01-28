import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, MapView, MarkerView } from '@maplibre/maplibre-react-native';

export const MapPage = () => {
    const [nothing, setNothing] = useState(false);

    const test = () => {
        setNothing(true);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={test} style={styles.button}>
                <Text>Button</Text>
            </TouchableOpacity>
            <MapView style={styles.map}>
                <Camera centerCoordinate={[2.31683, 48.85884]} zoomLevel={5} />
                <MarkerView coordinate={[2.31683, 48.85884]}>
                    <TouchableOpacity style={styles.marker}>
                        <Text>Test</Text>
                    </TouchableOpacity>
                </MarkerView>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    marker: {
        height: 32,
        width: 32,
    },
    button: {
        position: 'absolute',
        bottom: '8%',
        right: '15%',
        zIndex: 1
    },
});