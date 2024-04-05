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
          // get batch endpoint
    getOfferedCourse: build.query({
        query: () => ({
          url: '/offered-course',
          method: 'GET',
        }),
        providesTags: ['course'],
      }),
    })
})

export const { useCreateOfferedCourseMutation ,useGetOfferedCourseQuery} =offeredCourseApi