export class Store {
    private store: Map<string, string>
    constructor() {
        this.store = new Map()
    }
    public get(key: string): string | undefined {
        return this.store.get(key)
    }
    public set(key: string, value: string): void {
        this.store.set(key, value)
    }
    public delete(key: string): void {
        this.store.delete(key)
    }
}

export const serverStore = new Store()
