describe('Create course use case',()=>{

    it('should be able to add valid course', ()=>{
        const useCase= new CreateCourse(courseRepository)
        useCase.perform(createCourseRequest)
    })

})