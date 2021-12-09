import { Module } from '../../src/entities'
import { Lecture } from '../../src/entities/lecture'

describe('Module', () => {
  it('should be able to add lectures', () => {
    const module = new Module('Fundamentals')
    const lecture: Lecture = {
      description: 'Branching'
    }
    module.add(lecture)
    expect(module.lectures.length).toBe(1)
    expect(module.lectures.includes(lecture)).toBeTruthy()
  })
})
