import { StatusBar } from "react-native";
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

export default function StatusBarHeightHelper (): number {
  if (isIphoneX()) {
    return getStatusBarHeight()
  }

  return StatusBar.currentHeight || 0
}
