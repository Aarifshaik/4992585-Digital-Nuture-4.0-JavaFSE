package org.example;

import org.mockito.Mockito;
import org.testng.annotations.Test;
import static org.mockito.Mockito.*;

public class VerifyInteractionsTest {
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.fetchData();

        // Verify that mockApi.getData() was called
        verify(mockApi).getData();
    }
}
