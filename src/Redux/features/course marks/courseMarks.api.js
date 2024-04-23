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
        getCoursesMarksOf60ForShowingStudent: build.mutation({
            query: body => ({
                url: `/course-marks/get-marks-of-60`,
                method: 'POST',
                body,
            }),
            providesTags: ['course']
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
        updateCourseMarksOf40: build.mutation({
            query: ({ _id, marks }) => {
                return {
                    url: `/course-marks/update-marks-of-40/${_id}`,
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
        getCourseMarksOf40: build.query({
            query: courseId => ({
                url: `/course-marks/get-marks-of-40/${courseId}`,
                method: 'GET',
            }),
            providesTags: ['course']
        }),
    })
})

export const { useCreateCourseMarksOf60Mutation, useGetCourseMarksOf60Query, useCreateCourseMarksOf40Mutation, useUpdateCourseMarksOf60Mutation, useGetCourseMarksOf40Query, useUpdateCourseMarksOf40Mutation, useGetCoursesMarksOf60ForShowingStudentMutation } = courseMarksApi