import java.util.Arrays;

public class ProductSearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Shirt", "Men's Wear"),
            new Product(102, "Saree", "Women's Wear"),
            new Product(108, "Shoes", "Footwear"),
            new Product(101, "Bracelet", "jewellery"),
            new Product(103, "Cufflings", "Accessories")
        };

        int searchId = 108;

        // Linear Search (unsorted)
        long startLinear = System.nanoTime();
        Product linearResult = SearchEngine.linearSearch(products, searchId);
        long endLinear = System.nanoTime();
        long timeLinear = endLinear - startLinear;

        System.out.println("Linear Search Result: " + linearResult);
        System.out.println("Linear Search Time: " + timeLinear + " ns");

        // Binary Search (sorted) 
        
        Arrays.sort(products); // must sort before binary search


        long startBinary = System.nanoTime();
        Product binaryResult = SearchEngine.binarySearch(products, searchId);
        long endBinary = System.nanoTime();
        long timeBinary = endBinary - startBinary;

        System.out.println("Binary Search Result: " + binaryResult);
        System.out.println("Binary Search Time: " + timeBinary + " ns");
    }
}

// Note: Binary Search requires the array to be sorted.If not sorted it is not guaranteed to work correctly. 
// The binary search is faster than linear search in most cases, especially for large datasets.
// The linear search is simpler but less efficient for large datasets.
// if sorting time is considered, linear search may outperform binary search for small datasets.

// In my case, if sorting is Considered,this was the output:
// Linear Search Result: Product ID: 108, Name: Shoes, Category: Footwear
// Linear Search Time: 327900 ns
// Binary Search Result: Product ID: 108, Name: Shoes, Category: Footwear
// Binary Search Time: 285900 ns