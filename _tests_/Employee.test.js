const Employee = require ("../lib/Employee");

test("an object will be created", () => {
    const employee = new Employee ();
    expect(typeof(employee)).toBe("object");
});

 test("a full name is pulled out", () => {
        const name = "Test";
        const em = new Employee (name);
        expect(em.name).toBe(name);
    });

 test("a ID is present", () => {
        const id = 1234;
        const newid = new Employee (id);
        expect(newid.getId()).toBe(id);
    });

test("an email  is present", () => {
        const email = "email@test.com";
        const newemail = new Employee (email);
        expect(newemail.getEmail()).toBe(email);
    });

test("a role  is present", () => {
        const role = "Engineer";
        const newrole = new Employee (role);
        expect(newrole.getRole()).toBe(role);
    });