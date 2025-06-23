import { expect, test } from '@jest/globals'

function pow(a, b) {
    return a ** b
}

test('test function pow', () => {
    expect(pow(2, 3)).toBe(8)
    expect(pow(3, 3)).toBe(27)
    expect(pow(2, -2)).toBe(0.25)
})

// Написать функцию, которая принимает массив в качестве аргумента и возвращает сумму всех элементов массива. Исходный массив всегда содержит только числа. Пример:
// Если хоть один из значений в массиве не число , то вернуть nall.
// calcSumArr([2, 5, 1, 3]) // -> 11

function calcSumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'nall'
        }
        sum += arr[i]
    }
    return sum
}

test('test function calcSumArr', () => {
    expect(calcSumArr([2, 5, 1, 3])).toBe(11)
    expect(calcSumArr([1, 2, 3, 4, 5])).toBe(15)
    expect(calcSumArr([1, 2, '3', 4, 5])).toBe('nall')
})

// Используя метод `map` создайте новый массив, на основе массива `users`, в котором каждый элемент массива будет содержать строку вида:
// `['member 1: Darya', 'member 2: Masha', … etc]`.
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// Реализуйте решение двумя способами, используя function declaration & arrow function.

function createMembersArray(users) {
    return users.map((user, index) => `member ${index + 1}: ${user}`)
}

const createMembersArrayArrow = (users) => {
    return users.map((user, index) => `member ${index + 1}: ${user}`)
}

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

describe('Members Array Creation', () => {
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

    test('createMembersArray should return correct formatted array', () => {
        const result = createMembersArray(users)
        const expected = [
            'member 1: Darya',
            'member 2: Masha',
            'member 3: Denis',
            'member 4: Vitaliy',
            'member 5: Polina',
            'member 6: Anton'
        ]
        expect(result).toEqual(expected)
    })

    test('createMembersArrayArrow should return correct formatted array', () => {
        const result = createMembersArrayArrow(users)
        const expected = [
            'member 1: Darya',
            'member 2: Masha',
            'member 3: Denis',
            'member 4: Vitaliy',
            'member 5: Polina',
            'member 6: Anton'
        ]
        expect(result).toEqual(expected)
    })
})

// Есть массив с объектами:
// const users = [
//   { name: 'Alex', age: 31},
//   { name: 'Olga', age: 17},
//   { name: 'Carl', age: 15},
//   { name: 'Nancy', age: 28},
//   { name: 'Eric', age: 9}
// ]
// Создать новый массив с именами пользователей, у которых возраст меньше `18`. 
// Для решения задачи используем цикл `for..of` и метод `push`.

const getUnderageUsers = (users) => {
    const underageNames = []
    for (const user of users) {
        if (user.age < 18) {
            underageNames.push(user.name)
        }
    }
    return underageNames
}

// Тесты для функции
describe('getUnderageUsers', () => {
    test('returns names of users under 18', () => {
        const users = [
            { name: 'Alex', age: 31 },
            { name: 'Olga', age: 17 },
            { name: 'Carl', age: 15 },
            { name: 'Nancy', age: 28 },
            { name: 'Eric', age: 9 }
        ]

        const result = getUnderageUsers(users)
        expect(result).toEqual(['Olga','Carl', 'Eric'])
    })

    test('returns empty array when no users under 18', () => {
        const users = [
            { name: 'Alex', age: 31 },
            { name: 'Olga', age: 18 },
            { name: 'Nancy', age: 28 }
        ]

        const result = getUnderageUsers(users)
        expect(result).toEqual([])
    })

    test('returns empty array for an empty input array', () => {
        const result = getUnderageUsers([])
        expect(result).toEqual([])
    })
})

// Задача 3.
// С помощью метода `filter` создайте новый массив в котором не будет отрицательных чисел.
// const numbers = [7, -4, 32, -90, 54, 32, -21]
// Реализуйте решение двумя способами, используя function declaration & arrow function.

function filterPositiveNumbers(numbers) {
    return numbers.filter(number => number >= 0)
}

// Тесты для функции filterPositiveNumbers
describe('filterPositiveNumbers', () => {
    test('should filter out negative numbers', () => {
        const numbers = [7, -4, 32, -90, 54, 32, -21]
        const result = filterPositiveNumbers(numbers)
        expect(result).toEqual([7, 32, 54, 32])
    })

    test('should return empty array if all numbers are negative', () => {
        const numbers = [-1, -4, -10, -5]
        const result = filterPositiveNumbers(numbers)
        expect(result).toEqual([])
    })

    test('should return the same array if no negative numbers', () => {
        const numbers = [1, 4, 10, 5, 0]
        const result = filterPositiveNumbers(numbers)
        expect(result).toEqual([1, 4, 10, 5, 0])
    })

    test('should handle zero as a non-negative number', () => {
        const numbers = [-5, 0, 5]
        const result = filterPositiveNumbers(numbers)
        expect(result).toEqual([0, 5])
    })

    test('should handle empty array', () => {
        const result = filterPositiveNumbers([])
        expect(result).toEqual([])
    })
})

// *Самый высокий и самый низкий*
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
//     highAndLow('1 2 3 4 5') // return '5 1'
//     highAndLow('1 2 -3 4 5') // return '5 -3'
//     highAndLow('1 9 3 4 -5') // return '9 -5'
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

function highAndLow(numbers) {
    const numArray = numbers.split(' ').map(Number)
    const max = Math.max(...numArray)
    const min = Math.min(...numArray)
    return `${max} ${min}`
}

// Тесты для функции highAndLow
describe('highAndLow', () => {
    test('should return highest and lowest numbers from positive numbers', () => {
        expect(highAndLow('1 2 3 4 5')).toBe('5 1')
    })

    test('should handle negative numbers correctly', () => {
        expect(highAndLow('1 2 -3 4 5')).toBe('5 -3')
    })

    test('should handle mixed positive and negative numbers', () => {
        expect(highAndLow('1 9 3 4 -5')).toBe('9 -5')
    })

    test('should handle single number', () => {
        expect(highAndLow('42')).toBe('42 42')
    })

    test('should handle all same numbers', () => {
        expect(highAndLow('1 1 1 1')).toBe('1 1')
    })

    test('should handle large numbers', () => {
        expect(highAndLow('10000 -10000')).toBe('10000 -10000')
    })
})
