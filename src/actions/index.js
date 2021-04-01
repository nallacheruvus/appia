export function increment(v) {
    return {
        type: 'INCREMENT',
        payload: v

    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}