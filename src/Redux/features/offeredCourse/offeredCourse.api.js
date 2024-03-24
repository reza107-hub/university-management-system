import { baseApi } from "../../api";

const offeredCourseApi = baseApi.injectEndpoints({
    endpoints: (build)=> ({
        createOfferedCourse: build.mutation({
            query: (body)=>({
                url: `/offered-course/`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['course']
        })
    })
})

export const { useCreateOfferedCourseMutation } =offeredCourseApi