// https://github.com/facebook/jest/issues/4545
// https://gist.github.com/paulirish/1579671

const raf = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
});

export default raf;
