import { baseApi } from '../../api'

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // user list collection
    getUser: build.query({
      query: (params) => ({
        url: `/users`,
        method: 'GET',
        params,
      }),
      providesTags: ['user'],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body,
      }),
      providesTags: ['user'],
    }),
    getPresentUser: build.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),

    getPresentUserWithAdditionalInfo: build.query({
      query: (email) => ({
        url: `/userAdditionalInfo/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'admin-list', 'admin', 'faculty'],
    }),

    createUserAdditionalInfo: build.mutation({
      query: (body) => ({
        url: `/userAdditionalInfo/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
    }),
    getUserWithAdditionalInfo: build.query({
      query: (params) => ({
        url: `/userAdditionalInfo`,
        method: 'GET',
        params,
      }),
      providesTags: ['user'],
    }),

    contactByEmail: build.mutation({
      query: (data) => ({
        url: '/users/contact-us',
        method: 'POST',
        body: data,
      }),
    }),
    UpdateUserWithAdditionalInfo: build.mutation({
      query: ({ id, data }) => ({
        url: `/userAdditionalInfo/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['user', 'admin-list', 'admin', 'faculty'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetPresentUserWithAdditionalInfoQuery,
  useGetUserWithAdditionalInfoQuery,
  useGetPresentUserQuery,
  useCreateUserAdditionalInfoMutation,
  useCreateUserMutation,
  useUpdateUserWithAdditionalInfoMutation,
  useContactByEmailMutation,
} = userApi
