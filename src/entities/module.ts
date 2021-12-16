import { Lecture } from './lecture'

export class Module {
  private readonly lectures: Array<Lecture> = []
  private name: string
  constructor (name: string) {
    this.name = name
  }

  get numberOfLectures (): number {
    return this.lectures.length
  }

  add (lecture: Lecture): void {
    if (!this.includes(lecture)) {
      this.lectures.push(lecture)
    }
  }

  includes (lecture: Lecture): boolean {
    return this.lectures.find(lec => lec.equals(lecture)) !== undefined
  }
}
