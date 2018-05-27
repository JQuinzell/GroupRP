export default class Model {
    constructor(attrs: any) {
        this.mergeAttrs(attrs)
    }

    mergeAttrs(attrs: any) {
        Object.assign(this, attrs)
    }
}