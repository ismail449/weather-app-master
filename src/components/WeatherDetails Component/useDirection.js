const useDirction = (deg) => {
  if (deg === 0) {
    return 'we';
  } else if (deg === 90) {
    return 'wn';
  } else if (deg === 180) {
    return 'ww';
  } else if (deg === 270) {
    return 'ws';
  } else if (deg > 0 && deg < 90) {
    return 'wne';
  } else if (deg > 90 && deg < 180) {
    return 'wnw';
  } else if (deg > 180 && deg < 270) {
    return 'wsw';
  } else if (deg > 270 && deg < 3600) {
    return 'wse';
  }
};
export default useDirction;