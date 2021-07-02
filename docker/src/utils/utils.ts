const base = 5000
export const getRamdomWaitTime = () => {
    return Math.floor(Math.random() * base)
}