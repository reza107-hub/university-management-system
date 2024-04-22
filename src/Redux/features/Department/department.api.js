import { baseApi } from '../../api'

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartment: build.query({
      query: (params) => ({
        url: '/department',
        method: 'GET',
        params,
      }),
      providesTags: ['Department'],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: '/department',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Department'],
    }),

    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `/department/delete-dept/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Department'],
    }),

    createDepartmentWiseStudentFee: build.mutation({
      query: (data) => ({
        url: '/students/department-wise-student-fee',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Department'],
    }),
    getDepartmentWiseStudentFee: build.query({
      query: () => ({
        url: '/students/department-wise-student-fee',
        method: 'GET',
      }),
      providesTags: ['Department'],
    }),
    deleteDepartmentWiseStudentFee: build.mutation({
      query: (departmentId) => ({
        url: `/students/department-wise-student-fee/${departmentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Department'],
    }),
    updateDepartmentWiseStudentFee: build.mutation({
      query: ({ departmentId, body }) => {
        return {
          url: `/students/department-wise-student-fee/${departmentId}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Department'],
    }),
  }),
})

export const {
  useAddDepartmentMutation,
  useGetDepartmentQuery,
  useDeleteDepartmentMutation,
  useCreateDepartmentWiseStudentFeeMutation,
  useGetDepartmentWiseStudentFeeQuery,
  useDeleteDepartmentWiseStudentFeeMutation,
  useUpdateDepartmentWiseStudentFeeMutation
} = departmentApi
