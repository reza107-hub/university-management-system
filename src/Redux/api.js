// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: [
    'Programme',
    'Department',
    'user',
    'admin-list',
    'academic-semester',
    'batch',
    'admin',
    'faculty',
    'admission',
  ],
  endpoints: () => ({}),
})

// providesTags: ['user']
