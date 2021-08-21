const Engineer = require ("../lib/Engineer");

test("a github name is present", () => {
    const git = "Github";
    const gitname = new Engineer (git);
    expect(gitname.getGithub()).toBe(git);
});

test("returns manager role", () => {
    const role = "Engineer";
    const newrole = new Engineer (role);
    expect(newrole.getRole()).toBe(role);
});