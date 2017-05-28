import { StyleSheet } from 'react-native';

export const colors = {
  yellow: '#F5DC32',
  greenish: '#27A49D',
  lightGray: '#F7F7F7',
  gray: '#C6CBCD',
  darkGray: '#687982'
}

export const fontColors = StyleSheet.create({
  yellow: {
    color: colors.yellow
  },
  greenish: {
    color: colors.greenish
  },
  gray: {
    color: colors.gray
  },
  darkGray: {
    color: colors.darkGray
  }
})

export const backgroundColors = StyleSheet.create({
  yellow: {
    backgroundColor: colors.yellow
  },
  greenish: {
    backgroundColor: colors.greenish
  },
  lightGray: {
    backgroundColor: colors.lightGray
  },
  gray: {
    backgroundColor: colors.gray
  },
  darkGray: {
    backgroundColor: colors.darkGray
  }
})
