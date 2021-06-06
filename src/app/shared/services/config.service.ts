import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private key: string = '86d1c1dd0323be77fcbb8ac15b6743ce';

  constructor() { }

  get getKey(): string {
    return this.key;
  }
}
