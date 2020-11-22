import _useBreakpoint from 'use-breakpoint'

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 992 }

export function useBreakpoint() {
  return _useBreakpoint(BREAKPOINTS, 'desktop')
}
