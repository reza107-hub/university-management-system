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
    
    getUserIsStudent: build.query({
      query: (email) => ({
        url: `/users/student/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'student'],
    }),
    //-----------------semester pay--------
    semesterPayment: build.mutation({
      query: (body) => ({
        url: `/students/semester-pay`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admission'],
    }),
     
    isSemesterFeeComplete: build.query({
      query: ({ studentId, semesterRegistrationId }) => ({
        url: `/students/is-semester-fee-complete/${studentId}/${semesterRegistrationId}`,
        method: 'GET',
      }),
    })
    ,
    getSemesterRoutine: build.query({
      query: (studentId) => ({
        url: `/students/semester-routine/${studentId}`,
        method: 'GET',
      }),
      providesTags: ['user', 'admission', 'course'],
    }),
    getSingleStudentDataFromDb: build.query({
      query: (email) => ({
        url: `/students/single-student/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'student'],
    }),
    monthlyPayment: build.mutation({
      query: (body) => ({
        url: `/students/monthly-pay`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admission'],
    }),
    isMonthlyFeeComplete: build.query({
      query: ({ studentId, departmentId,month,year }) => ({
        url: `/students/is-monthly-fee-complete/${studentId}/${departmentId}/${month}/${year}`,
        method: 'GET',
      }),
    })
    ,
    monthlyFeeOfCurrentStudent: build.query({
      query: ({ studentId, departmentId }) => ({
        url: `/students/monthly-fee-of-current-student/${studentId}/${departmentId}`,
        method: 'GET',
      }),
    })
    ,
    monthlyFeePreviousDueOfCurrentStudent: build.query({
      query: ({ studentId }) => ({
        url: `/students/monthly-fee-previous-due-current-student/${studentId}`,
        method: 'GET',
      }),
    })
    ,
  }),
})

export const {
  useCreateStudentMutation,
  useDenyStudentMutation,
  useGetAllStudentsQuery,
  useCreateStudentManuallyMutation,
  useGetUserIsStudentQuery,
  useSemesterPaymentMutation,
  useGetSemesterRoutineQuery,
  useGetSingleStudentDataFromDbQuery,
  useIsSemesterFeeCompleteQuery,
  useMonthlyPaymentMutation,
  useIsMonthlyFeeCompleteQuery,
  useMonthlyFeeOfCurrentStudentQuery,
  useMonthlyFeePreviousDueOfCurrentStudentQuery
} = studentApi
