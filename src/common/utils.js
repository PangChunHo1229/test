export function
    debounce(func, delay) {
    let timer = null;

    return function (...args) {
        if (timer) {
            timer = clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function throttle(func, delay = 300) {
    let prev = 0
    return function () {
        let now = Date.now()
        if (now - prev >= delay) {
            func.apply(this, arguments)
            prev = Date.now()
        }
    }
}