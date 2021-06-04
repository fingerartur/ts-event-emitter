# Event emitter

Simple Typescript event emitter

```typescript
type Events = 'valuechange' | 'timeupdate'

const emitter = new EventEmitter<Events>()

const listener = (state: string) => {
    // ...
}

emitter.addEventListener('valuechange', listener)

emitter.triggerEvent('valuechange', 'value1')
emitter.triggerEvent('valuechange', 'value2')

emitter.removeEventListener('valuechange', listener)

emitter.removeAllEventListeners('valuechange')

// Remove all listeners of all events
emitter.clear()
```
