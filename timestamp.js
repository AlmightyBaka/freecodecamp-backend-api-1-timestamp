const timeFormatter = new Intl.DateTimeFormat('en',
{
    month: 'long',
    year: 'numeric',
    day: 'numeric'
})

const timestamp = (timeString) => {
    if (timeString === null || timeString === undefined || timeString.length > 1) {
        return null
    }
    
    timeString = timeString[0].slice(1, timeString[0].length)
    
    let time = Object.is(Number(timeString), NaN)?
        new Date(timeString)
      : new Date(timeString * 1000)

    if (time.toString() === 'Invalid Date') {
        return null
    }
    
    return {
        'unix':  time.getTime() / 1000,
        'natural': timeFormatter.format(time)
    }
} 

module.exports = timestamp