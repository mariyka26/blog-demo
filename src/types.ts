export type LangType = 'en' | 'ru'

export interface LangContextType {
    lang: LangType
    setLang: (lang: LangType) => void
}

export interface OutletContextType {
    setTitle: (title: string) => void;
    setBreadcrumbs: (breadcrumbs: Array<{ label: string; to: string }>) => void;
    setTabs: (breadcrumbs: Array<{ label: string; to: string }>) => void;
}

export interface PostType {
    id: number,
    image: 'string',
    text: 'string',
    date: 'string',
    lesson_num?: number,
    title: 'string',
    description?: 'string',
    author?: number
}

// Post preview
export type PostPreviewStateType = {
    isShownModal: boolean
    data: PostType | null
}

// Posts
export type PostsStateType = {
    list: PostType[] | null
    favorites: PostType[]
    error: string | null
    isLoading: boolean,
    limit: number,
    total: number
    ordering: string
    isMyPosts: PostType[] | null
}

// Tabs
export interface TabsProps {
    tabs: { label: string; path: string }[]
}

export interface TabsType {
    activeTabKey: number | null
}

export type PostsParamsType = {
    author__course_group?: number
    limit?: number
    offset?: number
    ordering?: string
    search?: string
}

export type PostsResponseType = {
    count: number
    results: PostType[]
}

// Auth
export type SignUpBodyType = {
    username: string
    email: string
    password: string
    course_group?: number
}

export type SignInBodyType = {
    email: string
    password: string
}

export type AuthSliceStateType = {
    isSignedUp: boolean
    isLoading: boolean
    error: string | null
    isActivated: boolean
    email: string | null
    jwt: JwtType | null
}

export type JwtType = {
    access: string
    refresh: string
}

export type UserType = {
    id: number
    username: string
    email: string
    course_group: number
}

export type ActivationBodyType = {
    uid?: string
    token?: string
}

export type PostStateType = {
    data: PostType | null
    isLoading: boolean
    error: string | null
    isNewPost: boolean
}