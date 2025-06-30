CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR rec IN (
    SELECT account_id, balance 
    FROM accounts 
    WHERE account_type = 'savings'
  ) LOOP
    UPDATE accounts
    SET balance = rec.balance * 1.01
    WHERE account_id = rec.account_id;
  END LOOP;

  COMMIT;
END;