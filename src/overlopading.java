public class Calculator {

    // Overload #1: add numbers
    public int add(int a, int b) {
        return a + b;
    }

    // Overload #2: add strings
    public String add(String a, String b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(10, 20));               // 30
        System.out.println(calc.add("Hello, ", "Java!"));   // Hello, Java!
    } 
}

// c# 
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public String add(String a, String b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(10, 20));
        System.out.println(calc.add("Hello, ", "Java!"));
    }
}
// c++
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public String add(String a, String b) { return a + b; }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(10, 20));
        System.out.println(calc.add("Hello, ", "Java!"));
    }
}

