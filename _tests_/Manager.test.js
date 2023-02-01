const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Chris', 1, 'chris@gmail.com', 29);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Gets role of employee', () => {
    const manager = new Manager('Chris', 1, 'chris@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 