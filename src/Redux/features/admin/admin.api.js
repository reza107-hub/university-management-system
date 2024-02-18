import { baseApi } from '../../api'

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserIsAdmin: build.query({
      query: (email) => ({
        url: `/admin/${email}`,
        method: 'GET',
      }),
      providesTags: ['user', 'admin', 'admin-list'],
    }),
    createAdmin: build.mutation({
      query: (body) => ({
        url: `/admin/createAdmin`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user', 'admin', 'admin-list'],
    }),
    // admin list get
    getAdminList: build.query({
      query: (params) => ({
        url: `/admin/admin-list`,
        method: 'GET',
        params,
      }),
      providesTags: ['admin-list', 'user', 'admin'],
    }),
    // admin delete
    deleteAnAdmin: build.mutation({
      query: (body) => ({
        url: `/admin/delete`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['admin-list', 'user', 'admin'],
    }),
  }),
})

export const {
  useGetUserIsAdminQuery,
  useCreateAdminMutation,
  useGetAdminListQuery,
  useDeleteAnAdminMutation,
} = adminApi
