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
        }),
        getSingleOfferedCourse: build.query({
            query: (id)=>({
                url: `/offered-course/${id}`,
                method: 'GET',
            }),
            providesTags: ['course']
        })
    })
})

export const { useCreateOfferedCourseMutation, useGetSingleOfferedCourseQuery } =offeredCourseApi