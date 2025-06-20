public class FinancialForecast {

    // Recursive power function to calculate (1 + rate)^years
    public static double calculateFutureInvestmentWithRecusrion(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }

        // Recursive call
        return (1 + rate) * calculateFutureInvestmentWithRecusrion(presentValue, rate, years - 1);
    }

    // Non-recursive function to calculate future investment
    public static double calculateFutureInvestmentWithoutRecursion(double presentValue, double rate, int years) {
        return Math.pow(1 + rate, years) * presentValue;
    }


    public static void main(String[] args) {
        double presentValue = 1000.0;
        double rate = 0.1;            
        int years = 50;
        System.out.printf("With Recusrion:\n");
        long startRecurion = System.nanoTime();
        double futureValue = calculateFutureInvestmentWithRecusrion(presentValue, rate, years);
        long endRecurion = System.nanoTime();
        long timeRecurion = endRecurion - startRecurion;
        System.out.printf("Future value after %d years: %.2f%n", years, futureValue);
        System.out.printf("Time taken for recursion: %d ns%n", timeRecurion);
        System.out.println();

        System.out.printf("Without Recursion:\n");
        long startWithoutRecurion = System.nanoTime();
        double futureValueWithoutRecursion = calculateFutureInvestmentWithoutRecursion(presentValue, rate, years);
        long endWithoutRecurion = System.nanoTime();
        long timeWithoutRecurion = endWithoutRecurion - startWithoutRecurion;
        System.out.printf("Future value after %d years: %.2f%n", years,futureValueWithoutRecursion);
        System.out.printf("Time taken without recursion: %d ns%n", timeWithoutRecurion);
        System.out.println();

        System.out.printf("Difference in time: %d ns%n", Math.abs(timeRecurion - timeWithoutRecurion));
        System.out.printf("Recursion is %s than without recursion%n",
                (timeRecurion < timeWithoutRecurion) ? "faster" : "slower");
    }
}


// Note:
// The recursive approach is not efficient for large values of 'years' due to the exponential growth of recursive calls.
// The non-recursive approach is much more efficient and should be used for large inputs.

// This is my Output for Large Input: Years = 5000
// With Recusrion:
// Future value after 5000 years: 919233389907436700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.00
// Time taken for recursion: 307000 ns

// Without Recursion:
// Future value after 5000 years: 919233389907436600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.00
// Time taken without recursion: 24000 ns

// Difference in time: 283000 ns
// Recursion is slower than without recursion