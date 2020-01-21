const strings = [
    { id: 3, nombre: 'orlando' },
    { id: 6, nombre: 'orlando' },
    { id: 7, nombre: 'orlando' },
    { id: 1, nombre: 'orlando' },
    { id: 5, nombre: 'orlando' },
    { id: 8, nombre: 'orlando' },
    { id: 9, nombre: 'orlando' }
];

const defaultSort = Array.from([9, 1, 8, 2, 7, 4]).sort();
strings = strings.sort((a, b) => a.id - b.id);
console.log(strings);