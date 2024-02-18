import { baseApi } from '../../api'

const programApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProgramme: build.mutation({
      query: (data) => ({
        url: '/program/create-program',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Programme'],
    }),
    getProgramme: build.query({
      query: (params) => ({
        url: '/program/get-all-program',
        method: 'GET',
        params,
      }),
      providesTags: ['Programme'],
    }),
    deleteProgram: build.mutation({
      query: (id) => {
        return {
          url: `/program/${id}`,
          method: 'PATCH',
        }
      },
      invalidatesTags: ['Programme'],
    }),
  }),
})

export const {
  useAddProgrammeMutation,
  useGetProgrammeQuery,
  useDeleteProgramMutation,
} = programApi
