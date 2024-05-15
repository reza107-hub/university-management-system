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
            query: (params) => ({
                url: `/course`,
                method: 'GET',
                params
            }),
            providesTags: ['course']
        }),
        updateCourse: build.mutation({
            query: ({ id, body }) => {
              return {
                url: `/course/update-course/${id}`,
                method: 'PUT',
                body,
              }
            },
            invalidatesTags: ['course'],
          }),
          deleteOneCourse: build.mutation({
            query: (id) => {
              return {
                url: `/course/delete-course/${id}`,
                method: 'DELETE',
              }
            },
            invalidatesTags: ['course'],
          }),
          departmentWiseCourses: build.query({
            query: (params) => ({
                url: `/course/department-wise-courses`,
                method: 'GET',
                params
            }),
            providesTags: ['course']
        }),
    }),
})

export const { useCreateCourseMutation, useGetAllCoursesQuery ,useUpdateCourseMutation,useDeleteOneCourseMutation,useDepartmentWiseCoursesQuery} = courseApi
