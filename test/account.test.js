const account = require("../src/account");

describe('account class', () => {

    it('should return initial balance of account', () =>{
        expect(account.getBalance()).toBe(500);
    });

    it('should make deposit of account', () => {
        account.deposit(400);

        expect(account.getBalance()).toBe(900);
    });

    it('should make withdraw of account', () => {
        account.withdraw(200);

        expect(account.getBalance()).toBe(700);
    })
});
