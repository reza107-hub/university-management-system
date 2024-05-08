import { baseApi } from '../../api'

const admissionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdmissionRequest: build.mutation({
      query: (body) => ({
        url: `/admission-request`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['admission'],
    }),
    getAdmissionRequest: build.query({
      query: () => {
        return {
          url: `/admission-request`,
          method: 'GET',
        }
      },
      providesTags: ['admission'],
    }),
    getSingleAdmissionRequest: build.query({
      query: (id) => {
        return {
          url: `/admission-request/${id}`,
          method: 'GET',
        }
      },
      providesTags: ['admission'],
    }),
  }),
})

export const {
  useCreateAdmissionRequestMutation,
  useGetAdmissionRequestQuery,
  useGetSingleAdmissionRequestQuery,
} = admissionApi
