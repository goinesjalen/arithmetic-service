const { add } = require("../arithmetica")
const { subtract } = require("../arithmetica")

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
})
test('20 + 30 = 50', () => {
    expect(add(20, 30)).toBe(50);
})
test('1 + 3 = 4', () => {
    expect(add(1, 3)).toBe(4);
})
test('2 + 30 = 32', () => {
    expect(add(2, 30)).toBe(32);
})
test('2 - 7 = -5', () => {
    expect(subtract(2, 7)).toBe(-5);
})
test('10 - 7 = 3', () => {
    expect(subtract(10, 7)).toBe(3);
})
test('11 - 7 = 4', () => {
    expect(subtract(11, 7)).toBe(4);
})