CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acct IN NUMBER,
  to_acct   IN NUMBER,
  amount    IN NUMBER
) IS
  insufficient_balance EXCEPTION;
  current_balance NUMBER;
BEGIN
  SELECT balance INTO current_balance FROM accounts WHERE account_id = from_acct;

  IF current_balance < amount THEN
    RAISE insufficient_balance;
  END IF;

  UPDATE accounts
  SET balance = balance - amount
  WHERE account_id = from_acct;

  UPDATE accounts
  SET balance = balance + amount
  WHERE account_id = to_acct;

  COMMIT;

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: insufficient balance.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
END;
