public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening a Word document.");
    }
    @Override
    public void edit() {
        System.out.println("Editing a Word document.");
    }
    @Override
    public void save() {
        System.out.println("Saving a Word document.");
    }
}
