import { desktop, tablet, mobile } from 'styles/media'

export const useMedia = (fw, d, t, m) => {

  if (window.innerWidth > desktop) {
    return fw
  } else if (window.innerWidth > tablet) {
    return d
  } else if (window.innerWidth > mobile) {
    return t
  } else {
    return m
  }
}