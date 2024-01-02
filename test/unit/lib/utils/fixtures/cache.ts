import { Chance } from 'chance';

const chance = new Chance();

export function createCacheItem(key?: string, value?: string) {
  return [key ? key : chance.word(), value ? value : chance.word()];
}

export function createCacheItems() {
  return [
    { key: chance.word(), value: chance.word() },
    { key: chance.word(), value: chance.word() },
    { key: chance.word(), value: chance.word() }
  ];
}
