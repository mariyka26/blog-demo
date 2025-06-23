import type { PostsParamsType, PostsResponseType, PostType } from '../types'
import { baseUrl, postsEndpoint, myPostsEndpoint } from '../config/api'
import { get, post } from '../config/client'

export async function requestPosts(params?: PostsParamsType): Promise<PostsResponseType | void> {
    try {
        console.log(params)

        const response = await get(baseUrl + postsEndpoint, { params })

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message)
        } else {
            console.log('Unexpected error', error)
        }
    }
}

export async function requestPost(id: string | number): Promise<PostType | void> {
    try {
        const response = await get(baseUrl + postsEndpoint + '/' + id)

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message)
        } else {
            console.log('Unexpected error', error)
        }
    }
}

export async function requestNewPost(formData: FormData) {
    try {
        const response = await post(baseUrl + postsEndpoint, formData)

        return response.data
    } catch (error) {
        console.log('Error', error.message)
    }
}

export async function requestMyPosts(params?: PostsParamsType): Promise<PostsResponseType | void> {
    const endpoint = `${baseUrl}${myPostsEndpoint}`

    try {
        const response = await get(endpoint, { params })
        return response.data
    } catch (error) {
        console.log('Error', error.message)
    }
}