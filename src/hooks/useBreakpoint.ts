import _useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1240 }

export function useBreakpoint () {
  return _useBreakpoint(BREAKPOINTS, 'desktop')
}
