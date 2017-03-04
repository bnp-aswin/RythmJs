export default (elem, value, options = {}) => {
  let max = options.max || 20
  let min = options.min || -20
    console.log(options.direction)
  if (options.direction === 'left') {
    max = -max
    min = -min
  }
  const twist = (max - min) * value
  elem.style.transform = `rotate(${min + twist}deg)`
}