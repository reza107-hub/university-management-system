import { baseApi } from '../../api'

const studentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createStudent: build.mutation({
      query: (body) => ({
        url: `/students`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admission'],
    }),
    createStudentManually: build.mutation({
      query: (body) => ({
        url: `/students/add-student`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admission'],
    }),
    denyStudent: build.mutation({
      query: (body) => ({
        url: `/students/deny-student`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admission'],
    }),
    getAllStudents: build.query({
      query: (params) => ({
        url: `/students`,
        method: 'GET',
        params,
      }),
      providesTags: ['user', 'admission'],
    }),
    getSemesterRoutine: build.query({
      query: (studentId) => ({
        url: `/students/semester-routine/${studentId}`,
        method: 'GET',
      }),
      providesTags: ['user', 'admission', 'course'],
    }),
    getUserIsStudent: build.query({
      query: (email) => ({
        url: `/users/student/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'student'],
    }),
    getSingleStudentDataFromDb: build.query({
      query: (email) => ({
        url: `/students/single-student/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'student'],
    }),
  }),
})

export const {
  useCreateStudentMutation,
  useDenyStudentMutation,
  useGetAllStudentsQuery,
  useCreateStudentManuallyMutation,
  useGetUserIsStudentQuery,
  useGetSemesterRoutineQuery,
  useGetSingleStudentDataFromDbQuery
} = studentApi
