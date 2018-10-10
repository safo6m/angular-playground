export class Meeting {
  constructor(private data: any = {}) {}

  public get title(): string {
    return this.data.attributes.title;
  }
}
