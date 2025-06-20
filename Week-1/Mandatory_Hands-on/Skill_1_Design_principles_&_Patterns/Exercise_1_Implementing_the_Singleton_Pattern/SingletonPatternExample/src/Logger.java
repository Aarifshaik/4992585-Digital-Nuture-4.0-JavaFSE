public class Logger {
    // Private static instance of itself
    // This is the only instance of Logger that will ever exist
    private static Logger instance;

    // Private constructor to prevent instantiation
    // This ensures that no other class can create an instance of Logger
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Public static method to get the singleton instance
    // This method checks if the instance is null and creates it if necessary
    // It ensures that only one instance of Logger is created
    public static Logger getInstance() {
        if (instance == null) {
            if (instance == null) {
                instance = new Logger();
            }
        }
        return instance;
    }

    // Example method to log messages
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
