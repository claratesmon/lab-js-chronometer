class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++
    if (printTimeCallback){
      printTimeCallback()
    } 
    
    },1000) 
  } 

  getMinutes() {
    if (this.currentTime === 0) {
      return 0
    } else {
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    } else {
      return this.currentTime % 60 // remainder is seconds left after forming whole minutes
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      value = "0" + value //not this.currentTime
      return value
    } else {
      return value.toString()
    }
  }

  stop() {
      clearInterval(this.intervalId) //// Wouldn't work if we hadn't started it on the #2 iteration
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ":" + seconds
  }
}
