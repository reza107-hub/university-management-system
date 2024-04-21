import { baseApi } from "../../api";

const attendanceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAttendance: build.mutation({
            query: body => ({
                url: `/attendance/create-attendance`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['user']
        }),
        getAttendanceOfThisCourse: build.query({
            query: offeredCourseId => ({
                url: `/attendance/get-attendance/${offeredCourseId}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
    })
})

export const { useCreateAttendanceMutation, useGetAttendanceOfThisCourseQuery } = attendanceApi