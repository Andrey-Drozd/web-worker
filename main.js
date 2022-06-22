// main thread

const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    const enterValue = +e.target['number'].value
    const resultValue = e.target['result']

    if (window.Worker) {
        const worker = new Worker('./worker.js')

        // передаем данные в поток воркера
        worker.postMessage(enterValue)

        resultValue.value = 'processing'

        // перехватываем ответ от воркера
        worker.onmessage = message => {
            console.log('[MAIN] Get message from worker thread: ', message)
            console.log('[MAIN] Get message.data from worker thread: ', message.data)

            resultValue.value = message.data
        }
    }
})
