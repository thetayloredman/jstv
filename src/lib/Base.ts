import debug from 'debug';

// FIXME: The _instanceID is global. I have no idea how to change it with the inheritance.
// Think of it this way:
//
//   class A {
//       static _id = 0;
//       constructor() { console.log(A._id); }
//   }
//   class B extends A {}
//
//   new B(); // 0
//   new B(); // 1
//   new A(); // 2? this should be 0
//
// How do I make the A class use the CHILD class's _id property???

/**
 * The base template for every single JSTV class.
 */
export default abstract class Base {
    /** The global instanceID value for the child classes. */
    protected static _instanceID: number = 0;
    /** The local version of `_instanceID`. */
    protected _instanceID: number;
    /** The Debug Log system for this Base. */
    protected _log: debug.Debugger;

    constructor() {
        // FIXME: Read above FIXME VVVVVV
        this._instanceID = Base._instanceID++;
        this._log = debug(`jstv:${this.constructor.name}:${this._instanceID.toString()}`);
    }
}
