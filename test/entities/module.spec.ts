import { Lecture, Module } from '../../src/entities'

describe('Module', () => {
  it('should be able to add lectures to modules', () => {
    const module = new Module('Fundamentals')
    const lecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')
    module.add(lecture)
    expect(module.includes(lecture)).toBeTruthy()
  })

  it('should not be able to add the same lecture twice in a module', () => {
    const module = new Module('Fundamentals')
    const lecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')
    const sameLecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')
    module.add(lecture)
    module.add(sameLecture)
    expect(module.includes(lecture)).toBeTruthy()
    expect(module.numberOfLectures).toBe(1)
  })

  it('should not be able to have two lectures with same name in a module', () => {
    const module = new Module('Fundamentals')
    const lecture: Lecture = new Lecture('Branching', 'https://youtube.com/1234')
    const otherLecture: Lecture = new Lecture('Branching', 'https://youtube.com/3456')
    module.add(lecture)
    module.add(otherLecture)
    expect(module.includes(lecture)).toBeTruthy()
    expect(module.includes(otherLecture)).toBeFalsy()
  })
})
