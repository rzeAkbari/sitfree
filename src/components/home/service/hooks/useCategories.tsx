import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import get from '../api/get'

export interface Category {
    title: string
    photo: string
    description: string
}

function useCategories(
    path: string,
    parameters = ''
): UseQueryResult<Category[], AxiosError> {
    const result = useQuery<Category[], AxiosError>({
        queryKey: ['categories', { path, parameters }],
        queryFn: get
    })

    return { ...result }
}

export default useCategories
