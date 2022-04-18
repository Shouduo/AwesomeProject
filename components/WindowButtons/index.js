import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {ThreeDots, Ripple, Home} from '../../assets/svg/index';

const WindowButtons = ({showHome = false, onClose, ...rest}) => {
  return (
    <View style={styles.headerContainer} {...rest}>
      <View style={styles.headerButtonGroup}>
        <TouchableOpacity style={styles.headerButton}>
          <ThreeDots color="white" />
        </TouchableOpacity>
        <View style={styles.verticalDivider} />
        <TouchableOpacity style={styles.headerButton} onLongPress={onClose}>
          <Ripple color="white" />
        </TouchableOpacity>
      </View>
      {showHome && (
        <TouchableOpacity style={styles.homeButton}>
          <Home color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 12,
    top: 56,
    zIndex: 999,
  },
  homeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  headerButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    height: 32,
    width: 88,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 16,
  },
  headerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  verticalDivider: {
    width: 1,
    marginVertical: 6,
    backgroundColor: '#ffffff22',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WindowButtons;
