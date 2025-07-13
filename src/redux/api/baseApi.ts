import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://code-commando.com/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["users", "products", "categories"],
  endpoints: (builder) => ({
    // Get all books
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    // Get all books
    getSingleProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: ["products"],
    }),
    // Get all books
    getAllCategories: builder.query({
      query: () => "/category",
      providesTags: ["categories"],
    }),
    // Login
    loginUser: builder.mutation({
      query: (userLoginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userLoginInfo,
      }),
      invalidatesTags: ["users"],
    }),
    // Login
    registerUser: builder.mutation({
      query: (userRegisterInfo) => ({
        url: "/users/register",
        method: "POST",
        body: userRegisterInfo,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAllCategoriesQuery,
  useGetSingleProductQuery,
} = baseApi;
