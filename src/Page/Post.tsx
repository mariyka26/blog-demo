import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../components/Loader/Loader'
import type { PostType } from '../types'

type PostParams = {
    id: string
}

export function Post(): React.ReactElement {
    const { id } = useParams<PostParams>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<PostType | null>(null)

    useEffect(() => {
        if (!id) return

        fetchData(id)
    }, [id])

    async function fetchData(id: string): Promise<void> {
        setIsLoading(true)

        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)

        if (response.ok) {
            const data: PostType = await response.json()

            setData(data)
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <Loader />
    }

    if (!data) {
        return <div>Пост не найден</div>
    }

    return (
        <article>
            <time className="text-body-secondary">{data.date}</time>
            <div className="d-flex justify-content-center">
                <img src={data.image} alt="" className="img-fluid rounded" />
            </div>
            <h1 className="mt-3">{data.title}</h1>
            <p>{data.text}</p>
        </article>
    )
}