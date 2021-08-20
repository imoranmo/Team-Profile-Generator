const Intern = require ("../lib/Intern");

test("a github name is present", () => {
    const git = "Github";
    const gitname = new Engineer (git);
    expect(gitname.getGithub()).toBe(git);
});