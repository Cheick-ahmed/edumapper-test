export const motionDirectives = {
  "modal-enter": {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 400, ease: [0.25, 0.1, 0.25, 1] },
  },
  "modal-exit": {
    initial: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -10 },
    transition: { duration: 300, ease: [0.25, 0.1, 0.25, 1] },
  },
  "section-expand": {
    initial: { opacity: 0, height: 0, marginTop: 0 },
    visible: { opacity: 1, height: "auto", marginTop: 16 },
    transition: { duration: 400, ease: [0.25, 0.1, 0.25, 1] },
  },
  "section-collapse": {
    initial: { opacity: 1, height: "auto", marginTop: 16 },
    visible: { opacity: 0, height: 0, marginTop: 0 },
    transition: { duration: 300, ease: [0.25, 0.1, 0.25, 1] },
  },
  "button-hover": {
    initial: { scale: 1 },
    visible: { scale: 1.02 },
    transition: { duration: 200, ease: "easeOut" },
  },
  "button-tap": {
    initial: { scale: 1 },
    visible: { scale: 0.98 },
    transition: { duration: 150, ease: "easeOut" },
  },
  "stagger-item": {
    initial: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 300, ease: [0.25, 0.1, 0.25, 1] },
  },
  "hr-expand": {
    initial: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1 },
    transition: { duration: 400, ease: [0.25, 0.1, 0.25, 1] },
  },
  "chevron-rotate": {
    initial: { rotate: 0 },
    visible: { rotate: 180 },
    transition: { duration: 300, ease: [0.25, 0.1, 0.25, 1] },
  },
  "card-fade-in": {
    initial: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 500, ease: [0.25, 0.1, 0.25, 1] },
  },
  "school-card-enter": {
    initial: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 600, ease: [0.25, 0.1, 0.25, 1] },
  },
  "icon-hover": {
    initial: { scale: 1 },
    visible: { scale: 1.05 },
    transition: { duration: 200, ease: "easeOut" },
  },
  "layout-shift": {
    transition: { duration: 400, ease: [0.25, 0.1, 0.25, 1] },
  },
  "mobile-slide-up": {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 400, ease: [0.25, 0.1, 0.25, 1] },
  },
  "result-card-enter": {
    initial: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 500, ease: [0.25, 0.1, 0.25, 1] },
  },
  "progress-bar": {
    initial: { scaleX: 0 },
    visible: { scaleX: 1 },
    transition: { duration: 800, ease: [0.25, 0.1, 0.25, 1], delay: 200 },
  },
  "counter-up": {
    initial: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 600, ease: [0.25, 0.1, 0.25, 1], delay: 400 },
  },
  "page-enter": {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 500, ease: [0.25, 0.1, 0.25, 1] },
  },
  "success-bounce": {
    initial: { scale: 0 },
    visible: { scale: 1 },
    transition: {
      duration: 400,
      ease: [0.25, 0.1, 0.25, 1],
      type: "spring",
      bounce: 0.4,
    },
  },
};
