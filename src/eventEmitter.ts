type Callback<T> = (value: T) => any

export class EventEmitter<Event> {
    private eventCallbacks = new Map<Event, Set<Callback<any>>>()

    addEventListener<T>(event: Event, callback: Callback<T>) {
        if (!this.eventCallbacks.has(event)) {
            this.eventCallbacks.set(event, new Set())
        }

        this.eventCallbacks.get(event)?.add(callback)
    }

    removeEventListener<T>(event: Event, callback: Callback<T>) {
        if (!this.eventCallbacks.has(event)) {
            return
        }

        this.eventCallbacks.get(event)?.delete(callback)
    }

    removeAllEventListeners(event: Event) {
        this.eventCallbacks.get(event)?.clear()
    }

    clear() {
        this.eventCallbacks.clear()
    }

    triggerEvent<T>(event: Event, value?: T) {
        const callbacks = this.eventCallbacks.get(event)

        if (callbacks) {
            callbacks.forEach(callback => callback(value))
        }
    }
}
