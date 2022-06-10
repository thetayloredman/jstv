# Contributing to jstv

## Helpful Information

An interesting standard throughout the source code is the `parentClassName` field. This is the name of the actual parent class, or it defaults to this class's name. It's used for extending classes, so the one `_log` instance uses the proper `jstv:ClassName:N` value. For example, if class A extends B and B extends Base, the super() calls would work similar to:

```ts
class B extends Base {
    constructor(parentClassName: string = 'B') {
        super(parentClassName);
    }
}

class A extends B {
    constructor(parentClassName: string = 'A') {
        super(parentClassName);
    }
}
```
