const Engineer = require ("../lib/Engineer");

test("a github name is present", () => {
    const git = "Github";
    const gitname = new Engineer (git);
    expect(gitname.getGithub()).toBe(git);
});