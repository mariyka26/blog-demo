import { buildSchemePagination } from '../src/utils/buildPagination'
import { expect, test } from '@jest/globals'

describe('buildSchemePagination', () => {
    test('returns correct pagination scheme for middle page', () => {
        const result = buildSchemePagination(3, 5)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    test('adds "..." for gaps in pagination', () => {
        const result = buildSchemePagination(3, 10)
        expect(result).toEqual([1, 2, 3, 4, '...', 10])
    })

    test('handles edge case of first page', () => {
        const result = buildSchemePagination(1, 5)
        expect(result).toEqual([1, 2, 3, 4, 5])
    })

    test('handles edge case of last page', () => {
        const result = buildSchemePagination(5, 5)
        expect(result).toEqual([1, '...', 3, 4, 5])
    })

    test('returns only valid pages when current page is out of range', () => {
        const result = buildSchemePagination(6, 5)
        expect(result).toEqual([1, 5])
    })

    test('returns correct pagination for single page', () => {
        const result = buildSchemePagination(1, 1)
        expect(result).toEqual([1])
    })

    test('handles cases with no pages', () => {
        const result = buildSchemePagination(1, 0)
        expect(result).toEqual([])
    })
})