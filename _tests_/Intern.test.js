const Intern = require ("../lib/Intern");

test("a github name is present", () => {
    const git = "Github";
    const gitname = new Intern (git);
    expect(gitname.getGithub()).toBe(git);
});

test("returns intern role", () => {
    const role = "Intern";
    const newrole = new Intern (role);
    expect(newrole.getRole()).toBe(role);
});