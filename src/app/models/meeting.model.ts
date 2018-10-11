export class Meeting {
  constructor(private attributes: any = {}) {}

  public get title(): string {
    return this.attributes.attributes.title;
  }
}
