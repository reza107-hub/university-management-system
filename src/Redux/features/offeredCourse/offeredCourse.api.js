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
          // get offered course endpoint
    getOfferedCourse: build.query({
        query: () => ({
          url: '/offered-course',
          method: 'GET',
        }),
        providesTags: ['course'],
      }),
      updateOfferedCourse: build.mutation({
        query: ({ id, body }) => {
          return {
            url: `/offered-course/${id}`,
            method: 'PUT',
            body,
          }
        },
        invalidatesTags: ['course'],
      }),
      deleteOneOfferedCourse: build.mutation({
        query: (id) => {
          return {
            url: `/offered-course/${id}`,
            method: 'DELETE',
          }
        },
        invalidatesTags: ['course'],
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

export const { useCreateOfferedCourseMutation ,useGetOfferedCourseQuery,useDeleteOneOfferedCourseMutation , useUpdateOfferedCourseMutation,useGetSingleOfferedCourseQuery} =offeredCourseApi
