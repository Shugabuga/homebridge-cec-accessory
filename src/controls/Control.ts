export interface IControlConfig {
  name: string;
  address: number;
}

export default class Control {

  name: string;
  addressByte: number;
  senderNibble: number;
  controlNibble: number;

  constructor (config: IControlConfig) {
    this.name = config.name;
    this.controlNibble = config.address;
    this.senderNibble = 14;

    this.addressByte = ((this.senderNibble % 16) << 4) | (this.controlNibble % 16);
    console.log(this.addressByte);
  }

}
