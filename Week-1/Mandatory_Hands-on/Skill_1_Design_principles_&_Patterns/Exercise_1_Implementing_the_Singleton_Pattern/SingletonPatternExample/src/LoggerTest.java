public class LoggerTest {
    public static void main(String[] args) {
        Logger loggerOne = Logger.getInstance();
        Logger loggerTwo = Logger.getInstance();

        loggerOne.log("This is the first log message.");
        loggerTwo.log("This is the second log message.");

        // Verifies both references point to the same object
        if (loggerOne == loggerTwo) {
            System.out.println("Both logger1 and logger2 are the same instance.");
        } else {
            System.out.println("Different instances exist. Singleton failed.");
        }
    }
}
