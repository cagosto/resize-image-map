export default class ImageResize {
  constructor(config) {
    const {width, height, element} = config

    this.imageW = width;
    this.imageH = height
    this.imageMap = document.querySelector(element)
    const mapId = this.imageMap.getAttribute('usemap')
    const area = document.querySelector(`map[name="${mapId.substring(1, mapId.length)}"]`).children
    this.areaArray = Array.from(area)

    window.addEventListener('resize', this.resizeEvent)
    setTimeout(this.imgMap, 500)
  }
  imgMap = () => {
    const {imageW, imageH} = this
    const wPercent = this.imageMap.offsetWidth / 100
    const hPercent = this.imageMap.offsetHeight / 100

    this.areaArray.forEach( elem => {
      const coords = this.getCoords(elem).split(",")
      const coordsPercent = coords.map( (coord, index) => {
        return (index % 2) === 0
          ? parseInt(((coords[index] / imageW) * 100) * wPercent, 10)
          : parseInt(((coords[index] / imageH) * 100) * hPercent, 10)
      }).join()

      elem.setAttribute('coords', coordsPercent)
    })
  }
  getCoords = (elem) => {
    let areaCords = elem.dataset.coords

    if(!areaCords){
      areaCords = elem.getAttribute('coords')

      elem.dataset.coords = areaCords
    }

    return areaCords
  }
  resizeEvent = (e) => {
    this.imgMap()
  }
}
