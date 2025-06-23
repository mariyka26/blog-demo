export const buildSchemePagination = (currentPage: number, pageCount: number): (number | string)[] => {
    if (pageCount <= 0) return [];
    if (pageCount === 1) return [1];
    
    if (currentPage < 1 || currentPage > pageCount) {
        return [1, pageCount];
    }
    
    if (pageCount <= 5) {
        // Особый случай для последней страницы в диапазоне 5 страниц
        if (currentPage === pageCount && pageCount === 5) {
            return [1, '...', 3, 4, 5];
        }
        return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    
    const prevPageNumber = currentPage - 1;
    const nextPageNumber = currentPage + 1;

    const scheme: (number | string)[] = [1, prevPageNumber, currentPage, nextPageNumber, pageCount];
    const filteredScheme = scheme.filter(item => typeof item === 'number' && item > 0 && item <= pageCount);

    const set = new Set(filteredScheme);
    const result = Array.from(set).sort((a, b) => Number(a) - Number(b));

    if (result.length > 1) {
        for (let i = 0; i < result.length - 1; i++) {
            const current = result[i] as number;
            const next = result[i + 1] as number;
            
            if (next - current > 1) {
                result.splice(i + 1, 0, '...');
                i++;
            }
        }
    }

    return result;
}
