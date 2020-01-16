//animation configs & variants

/*EASING CONFIG*/
const easing = [0.175, 0.85, 0.42, 0.96];

/*EASING ANIMATION DIRECTION*/
export const yAxisVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing
    }
  }
};

export const xAxisVariants = {
  exit: { x: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};
