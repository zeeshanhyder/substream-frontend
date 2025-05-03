export const throttle = (func: <T>(args: T) => void, delay: number) => {
    let lastCall = 0
    return function <U extends unknown[]>(...args: U) {
        const now = new Date().getTime()
        if (now - lastCall >= delay) {
            func(args)
            lastCall = now
        }
    }
}

export const convertSecsToMins = (runtimeInSecs: number) => {
    let minutes = parseInt(Number(runtimeInSecs / 60).toString())
    let secs = parseInt(Number(runtimeInSecs % 60).toString())
    if (isNaN(minutes)) {
        minutes = 0
    }
    if (isNaN(secs)) {
        secs = 0
    }
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedSeconds = secs < 10 ? `0${secs}` : secs
    return `${paddedMinutes}:${paddedSeconds}`
}
