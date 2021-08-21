const Manager = require ("../lib/Manager");

test("an office number is present", () => {
    const office = "12345";
    const officenumber = new Manager (office);
    expect(officenumber.getOffice()).toBe(office);
});

test("returns manager role", () => {
    const role = "Manager";
    const newrole = new Manager (role);
    expect(newrole.getRole()).toBe(role);
});