import { EventEmitter } from './eventEmitter'

describe('Event emitter', () => {
    it('can add listener', () => {
        const emitter = new EventEmitter<'statechange'>()
        emitter.addEventListener('statechange', () => {})
    })

    it('can trigger event', () => {
        const emitter = new EventEmitter()
        const spy = jest.fn()

        emitter.addEventListener('statechange', spy)
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)

        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(2)
    })

    it('can remove listener', () => {
        const emitter = new EventEmitter()
        const spy = jest.fn()

        emitter.addEventListener('statechange', spy)
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)

        emitter.removeEventListener('statechange', spy)
        emitter.triggerEvent('statechange')
    })

    it('can remove all listeners of event', () => {
        const emitter = new EventEmitter()
        const spy = jest.fn()

        emitter.addEventListener('statechange', spy)
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)

        emitter.removeAllEventListeners('statechange')
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('can remove all listeners of all events', () => {
        const emitter = new EventEmitter()
        const spy = jest.fn()

        emitter.addEventListener('statechange', spy)
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)

        emitter.clear()
        emitter.triggerEvent('statechange')

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
