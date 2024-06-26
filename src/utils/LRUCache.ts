export default class LRUCache<K, V> {
  private cache = new Map<K, V>();
  private keysOrder: K[] = [];

  constructor(private capacity: number) {}

  get(key: K): V | undefined {
      if (this.cache.has(key)) {
          // 如果访问的key存在，将其移到keysOrder的末尾以表示最近访问
          const value = this.cache.get(key)!;
          this.moveToRecent(key);
          return value;
      }
      return undefined;
  }

  put(key: K, value: V): void {
      if (this.cache.has(key)) {
          // 如果key已存在，则更新其值并移到末尾
          this.cache.set(key, value);
          this.moveToRecent(key);
      } else {
          if (this.keysOrder.length >= this.capacity) {
              // 达到容量限制，删除最老的（第一个加入的）项
              const oldestKey = this.keysOrder.shift()!;
              this.cache.delete(oldestKey);
          }
          // 添加新项到Map和keysOrder末尾
          this.cache.set(key, value);
          this.keysOrder.push(key);
      }
  }

  private moveToRecent(key: K): void {
      // 从当前位置移除key，然后添加到末尾
      const index = this.keysOrder.indexOf(key);
      if (index > -1) {
          this.keysOrder.splice(index, 1);
          this.keysOrder.push(key);
      }
  }
}
