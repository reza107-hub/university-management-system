import { baseApi } from '../../api'

const courseApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createCourse: build.mutation({
            query: (body) => ({
                url: `/course`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['course']
        }),
        getAllCourses: build.query({
            query: (body) => ({
                url: `/course`,
                method: 'GET',
                body
            }),
            providesTags: ['course']
        }),
    }),
})

export const { useCreateCourseMutation, useGetAllCoursesQuery } = courseApi
