import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { Posts } from './Page/AllPosts'
import { FavoriteCards } from './Page/Favorites'
import { SignIn } from './Page/SignIn'
import { SignUp } from './Page/SignUp'
import { Post } from './Page/Post'
import { Profile } from './Page/Profile'
import { OnlyAuth } from './components/OnlyAuth/OnlyAuth'
import type { RouteObject } from 'react-router'
import { PostsSearch } from './Page/SearchResults'
import { Activation } from './Page/Activation'
import { Confirmation } from './Page/Confirmation'
import { Success } from './Page/Success'
import { NewPost } from './Page/NewPost'
import { MyPosts } from './Page/MyPosts'

const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="posts/all/1" />,
            },
            {
                path: '/posts',
                children: [
                    {
                        path: '/posts/all/:currentPage',
                        element: <Posts />,
                    },
                    {
                        path: '/posts/favorites',
                        element: <FavoriteCards />
                    },
                    {
                        path: '/posts/search/:query/:currentPage',
                        element: <PostsSearch />,
                    },
                    {
                        path: '/posts/:id',
                        element: <Post />,
                    },
                    {
                        path: '/posts/new',
                        element: <NewPost />,
                    },
                    {
                        path: '/posts/my/:currentPage',
                        element: <MyPosts />,
                    },
                ]
            },
            {
                path: '/auth',
                children: [
                    {
                        path: '/auth/sign-in',
                        element: <SignIn />,
                    },
                    {
                        path: '/auth/sign-up',
                        element: <SignUp />,
                    },
                    {
                        path: '/auth/activation',
                        children: [
                            {
                                path: '/auth/activation/:uid/:token',
                                element: <Activation />,
                            },
                            {
                                path: '/auth/activation/confirmation',
                                element: <Confirmation />,
                            },
                            {
                                path: '/auth/activation/success',
                                element: <Success />,
                            },
                        ]
                    },
                ]
            },
            {
                path: '/my/profile/15',
                element: <OnlyAuth><Profile /></OnlyAuth>,
            },
        ],
    },
]

export const router = createBrowserRouter(routes, {
    basename: '/blog-demo'
})
