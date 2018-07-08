/**
 * Example config
 * {
    width: 1024, Natural width
    height: 768, Natural height
    element : '#power-puff__map' Selector
   }
 */
export default class ImageResize {
  /**
   * constructor - make image maps responsive
   * @param {Object} config - setting for responsive image map
   */
  constructor(config) {
    const {width, height, element} = config

    this.imageW = width
    this.imageH = height
    this.imageMap = document.querySelector(element)
    const mapId = this.imageMap.getAttribute('usemap')
    const mapElem = `map[name="${mapId.substring(1, mapId.length)}"]`
    const area = document.querySelector(mapElem).children
    this.areaArray = Array.from(area)

    window.addEventListener('resize', this.resizeEvent)
    setTimeout(this.imgMap, 500)
  }
  /**
   * getCoords - get image map coordinates
   * @param  {Node} elem - area tag
   * @return {String} - area map coordinates
   */
  getCoords = (elem) => {
    let areaCords = elem.dataset.coords

    if(!areaCords){
      areaCords = elem.getAttribute('coords')

      elem.dataset.coords = areaCords
    }

    return areaCords
  }
  imgMap = () => {
    this.wPercent = this.imageMap.offsetWidth / 100
    this.hPercent = this.imageMap.offsetHeight / 100

    this.areaArray.forEach(this.areaLoop)
  }
  /**
   * areaLoop - Loop through area tags for image map
   * @param  {Node} area - Area tag
   */
  areaLoop = (area) => {
    const coords = this.getCoords(area).split(",")
    const coordsPercent = coords.map(this.mapCoords).join()

    area.setAttribute('coords', coordsPercent)
  }
  /**
   * mapCoords - Set new image map coordinates based on new image width and height
   * @param  {Num} coord - coordinates from image map array
   * @param  {Num} index - Loop index
   * @return {Num} - New image map coordinates
   */
  mapCoords = (coord, index) => {
    return (index % 2) === 0
      ? parseInt(((coord / this.imageW) * 100) * this.wPercent, 10)
      : parseInt(((coord / this.imageH) * 100) * this.hPercent, 10)
  }
  resizeEvent = (e) => {
    this.imgMap()
  }
}
