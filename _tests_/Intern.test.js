const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Eliza', 3, 'eliza@gmail.com', 'UT');
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Eliza', 3, 'eliza@gmail.com', 'UT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Eliza', 3, 'eliza@gmail.com', 'UT');
    expect(intern.getRole()).toEqual("Intern");
});