import { baseApi } from '../../api'

const SemesterRegistration = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSemesterRegistration: build.mutation({
      query: (body) => ({
        url: `/semester-registrations/create-semester-registration`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['academic-semester'],
    }),
    updateStatusSemesterRegistration: build.mutation({
      query: ({ id, body }) => ({
        url: `/semester-registrations/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['academic-semester'],
    }),
    getSemesterRegistration: build.query({
      query: () => ({
        url: `/semester-registrations`,
        method: 'GET',
      }),
      providesTags: ['academic-semester'],
    }),
    getOngoingSemesterRegistration: build.query({
      query: () => ({
        url: `/semester-registrations/getOngoingSemesterRegistration`,
        method: 'GET',
      }),
      providesTags: ['academic-semester'],
    }),
  }),
})

export const {
  useCreateSemesterRegistrationMutation,
  useGetSemesterRegistrationQuery,
  useUpdateStatusSemesterRegistrationMutation,
  useGetOngoingSemesterRegistrationQuery
} = SemesterRegistration
