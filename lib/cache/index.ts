import { createSchedule } from "../utils/schedule.js";

export interface Data {
  [key: string]: any
}

export default class Cache {
  protected data: Data = {};

  findOne(key: string) {
    return this.data[key];
  }
  findMany(keys: string[]) {
    const result: any = {};
    for (const key of keys) {
      result[key] = this.findOne(key);
    }
    return result;
  }
  insertOne(key: string, value: any, expiresIn?: number) {
    this.data[key] = value;
    if(value && expiresIn) {
      this.setExpiration(key, expiresIn);
    }
  }
  insertMany(items: any[]) {
    for(const { key, value, expiresIn } of items) {
      this.insertOne(key, value, expiresIn);
    }
  }
  clear() {
    this.data = {};
  }
  expire(key: string) {
    delete this.data[key];
  }
  setExpiration(key: string, expiresIn: number) {
    createSchedule(expiresIn, () => this.expire(key));
  }
}
