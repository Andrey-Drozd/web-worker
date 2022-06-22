// worker thread

function fibonacci(n) {
    if (n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

this.addEventListener('message', message => {
    console.log('[WORKER] Get message from main thread: ', message)
    console.log('[WORKER] Get message.data from main thread: ', message.data)

    // рассчитываем число фибоначчи и отправляем результат в основной поток
    this.postMessage(fibonacci(message.data))
})