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
  }),
})

export const { useCreateAdmissionRequestMutation } = admissionApi
