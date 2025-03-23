import { apiSlice } from "./apiSlice";

let token = ""
if(JSON.parse(localStorage.getItem("AUTHKEY"))){
    token = JSON.parse(localStorage.getItem("AUTHKEY")).accessToken
}

const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*"  ,
    "Authorization":`Bearer ${token}`
}

export const businessApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
    getAllBusinesses: builder.query({
        query: () => ({
            url : "/businesses",
            method : "GET",
            headers: headers
        }),
        providesTags: ['Business'],

      }),
  
    getBusiness: builder.query({
        query: (id) => ({
            url: `/businesses/${id}`,
            method : "GET",
            headers: headers
        }),
        providesTags: ['Business'],

    }),

 
    createBusiness: builder.mutation({
        query: ({business_id, detail,liked,visited} ) => ({
            url: "/businesses",
            method: "POST",
            body: {
                business_id :business_id ,
                liked :liked,
                visited,visited,
                detail : detail
            },
            headers: headers
        }),
        invalidatesTags: ['Business'],
    }),
    resetPassword: builder.mutation({
        query: ({ username, old_password, new_password}) => ({
            url: "/reset_password",
            method: "POST",
            body: {username : username ,old_password:old_password,new_password:new_password}
      }),
      invalidatesTags: ['Business'],
  }),
    login: builder.mutation({
        query: ({ username ,password, token}) => ({
            url: "/login",
            method: "POST",
            body: {username : username,password : password, token : token},
        }),
        invalidatesTags: ['Business'],
    }),
  
    logout: builder.mutation({
        query: ( {username , token }) => ({
            url: "/logout",
            method: "POST",
            body: {username ,token},
        }),
        invalidatesTags: ['Business'],
    }),  
  }),
});

export const {
  
    useLoginMutation,
    useLogoutMutation,
    useGetAllBusinessesQuery,
    useGetBusinessQuery,
    useCreateBusinessMutation,
    useResetPasswordMutation,  

} = businessApiSlice;

/*

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;

*/