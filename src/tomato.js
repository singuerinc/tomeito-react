export default class Tomato {
  constructor (milliseconds) {
    this._milliseconds = milliseconds
    this._time = new Date(milliseconds)
  }

  updateTime () {
    this._milliseconds -= 1000
    this._time = new Date(this._milliseconds)
    console.log(this._milliseconds)
  }

  play () {
    clearInterval(this._interval)
    this._interval = setInterval(() => this.updateTime(), 1000)
  }

  set time (value) {
    this._time = value
  }

  get time () {
    return this._time
  }
}
