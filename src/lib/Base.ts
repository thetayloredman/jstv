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

export default abstract class Base {
        protected static _instanceID: number = 0;
        protected _instanceID: number;
        protected _log: debug.Debugger;

        constructor() {
            // FIXME: Read above FIXME VVVVVV
            this._instanceID = Base._instanceID++;
            this._log = debug(`jstv:${this.constructor.name}:${this._instanceID.toString()}`);
        }
}
