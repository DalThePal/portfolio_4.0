
export const desktop  = 1440
export const tablet   = 1024
export const mobile   = 428

const media = {
  mobile: `@media screen and (max-width: ${mobile}px)`,
  tablet: `@media screen and (min-width: ${mobile + 1}px) and (max-width: ${tablet}px)`,
  desktop: `@media screen and (min-width: ${tablet + 1}px) and (max-width: ${desktop}px)`,
  fullWidth: `@media screen and (min-width: ${desktop + 1}px)`,
}

export default media
