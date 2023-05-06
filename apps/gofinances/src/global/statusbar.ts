import { StatusBar } from 'react-native';
import { getStatusBarHeight, isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

export function StatusBarHeightHelper (): number {
  if (isIphoneX()) {
    return getStatusBarHeight()
  }

  return StatusBar.currentHeight || 0
}

export function BottomHeightHelper (): number {
  if (isIphoneX()) {
    return getBottomSpace()
  }

  return 12
}
