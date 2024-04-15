import { baseApi } from "../../api"

const courseMarksApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createCourseMarksOf60: build.mutation({
            query: body => ({
                url: `/course-marks/create-marks-of-60`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['course']
        }),
        updateCourseMarksOf60: build.mutation({
            query: ({ _id, marks }) => {
                return {
                    url: `/course-marks/update-marks-of-60/${_id}`,
                    method: 'PATCH',
                    body: { marks },
                }
            },
            invalidatesTags: ['course']
        }),
        createCourseMarksOf40: build.mutation({
            query: body => ({
                url: `/course-marks/create-marks-of-40`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['course']
        }),
        getCourseMarksOf60: build.query({
            query: courseId => ({
                url: `/course-marks/get-marks-of-60/${courseId}`,
                method: 'GET',
            }),
            providesTags: ['course']
        }),
    })
})

export const { useCreateCourseMarksOf60Mutation, useGetCourseMarksOf60Query, useCreateCourseMarksOf40Mutation, useUpdateCourseMarksOf60Mutation } = courseMarksApi