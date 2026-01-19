 // Module data with topics and C++ code examples
        const modules = [
            {
                id: 1,
                title: "Data Types & Structures",
                topics: [
                    {
                        title: "The Concept of Data Type",
                        content: "A data type defines a set of values and the operations that can be performed on those values. In programming, data types tell the compiler/interpreter how the programmer intends to use the data.",
                        code: `// C++ example of different data types
#include <iostream>
using namespace std;

int main() {
    // Different data types in C++
    int integerVar = 42;
    float floatVar = 3.14f;
    double doubleVar = 3.1415926535;
    char charVar = 'A';
    bool boolVar = true;
    
    cout << "Integer: " << integerVar << endl;
    cout << "Float: " << floatVar << endl;
    cout << "Double: " << doubleVar << endl;
    cout << "Character: " << charVar << endl;
    cout << "Boolean: " << boolVar << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Primitive Data Types",
                        content: "Primitive data types are the basic building blocks of a programming language. They are predefined by the language and named by a keyword. These types serve as the foundation for all other data structures.",
                        code: `// Primitive data types in C++
#include <iostream>
using namespace std;

int main() {
    // Integer types
    short shortVar = 100;
    int intVar = 1000;
    long longVar = 100000L;
    long long longLongVar = 10000000000LL;
    
    // Floating point types
    float floatVar = 10.5f;
    double doubleVar = 20.99;
    long double longDoubleVar = 30.123456L;
    
    // Character type
    char charVar = 'Z';
    wchar_t wideChar = L'Ω';
    
    // Boolean type
    bool boolVar = false;
    
    // Void type (no value)
    void* pointerVar = nullptr;
    
    cout << "short: " << shortVar << endl;
    cout << "int: " << intVar << endl;
    cout << "bool: " << boolVar << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Linear vs Non-Linear Data Structures",
                        content: "Linear data structures organize data in a sequential manner where each element is attached to its previous and next adjacent elements. Non-linear data structures organize data in a hierarchical manner where an element can be connected to more than two elements.",
                        code: `// Examples of linear and non-linear structures
#include <iostream>
#include <vector>
using namespace std;

// Linear structure example: Array
void linearExample() {
    int arr[5] = {10, 20, 30, 40, 50}; // Linear structure
    
    cout << "Linear Array: ";
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Node for non-linear structure (tree)
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int val) {
        data = val;
        left = right = nullptr;
    }
};

int main() {
    cout << "Linear Data Structure Example:" << endl;
    linearExample();
    
    cout << "\\nNon-linear Data Structure Example (Tree):" << endl;
    // Creating a simple tree
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    cout << "Tree created with root value: " << root->data << endl;
    cout << "Left child: " << root->left->data << endl;
    cout << "Right child: " << root->right->data << endl;
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 2,
                title: "Arrays",
                topics: [
                    {
                        title: "Linear Arrays",
                        content: "A linear array is a collection of elements with the same data type stored in contiguous memory locations. Elements are accessed using an index that represents their position in the array.",
                        code: `// Linear array implementation in C++
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of linear array
    int numbers[10] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    
    // Accessing array elements
    cout << "Element at index 0: " << numbers[0] << endl;
    cout << "Element at index 5: " << numbers[5] << endl;
    
    // Modifying array elements
    numbers[3] = 100;
    cout << "Modified element at index 3: " << numbers[3] << endl;
    
    // Display all elements
    cout << "\\nAll array elements: ";
    for(int i = 0; i < 10; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Calculating array size
    int size = sizeof(numbers) / sizeof(numbers[0]);
    cout << "Array size: " << size << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Representation of Linear Array in Memory",
                        content: "In memory, a linear array occupies a contiguous block of memory. The address of the first element is called the base address. Other elements can be accessed using the formula: Address of element at index i = Base Address + (i * size_of_element).",
                        code: `// Memory representation of arrays in C++
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    
    cout << "Memory addresses of array elements:" << endl;
    cout << "Base address of array: " << &arr[0] << endl;
    
    for(int i = 0; i < 5; i++) {
        cout << "Address of arr[" << i << "]: " << &arr[i] 
             << " | Value: " << arr[i] << endl;
    }
    
    // Calculate element address manually
    cout << "\\nCalculating address of arr[2] manually:" << endl;
    int base = (long)&arr[0];
    int size_of_int = sizeof(int);
    int index = 2;
    long calculated_address = base + (index * size_of_int);
    
    cout << "Base address: " << base << endl;
    cout << "Size of int: " << size_of_int << " bytes" << endl;
    cout << "Calculated address: " << calculated_address << endl;
    cout << "Actual address: " << (long)&arr[2] << endl;
    
    // Multi-dimensional array (2D array)
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    cout << "\\n2D Array Memory Representation:" << endl;
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << "matrix[" << i << "][" << j << "] = " 
                 << matrix[i][j] << " at address: " << &matrix[i][j] << endl;
        }
    }
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 3,
                title: "Array Operations",
                topics: [
                    {
                        title: "Traversing Linear Arrays",
                        content: "Traversing means accessing each element of the array exactly once to perform some operation like printing, searching, or modifying values.",
                        code: `// Array traversal techniques in C++
#include <iostream>
using namespace std;

int main() {
    int arr[8] = {5, 12, 7, 18, 23, 15, 9, 30};
    int n = 8;
    
    cout << "Array traversal using for loop:" << endl;
    for(int i = 0; i < n; i++) {
        cout << "arr[" << i << "] = " << arr[i] << endl;
    }
    
    cout << "\\nArray traversal using while loop:" << endl;
    int j = 0;
    while(j < n) {
        cout << arr[j] << " ";
        j++;
    }
    cout << endl;
    
    cout << "\\nTraversal with operations (doubling each element):" << endl;
    for(int i = 0; i < n; i++) {
        arr[i] = arr[i] * 2;
        cout << arr[i] << " ";
    }
    cout << endl;
    
    // Using pointers for traversal
    cout << "\\nArray traversal using pointers:" << endl;
    int* ptr = arr;
    for(int i = 0; i < n; i++) {
        cout << *(ptr + i) << " ";
    }
    cout << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Searching in Arrays",
                        content: "Searching is the process of finding a particular element in an array. Two common search algorithms are Linear Search (checks each element sequentially) and Binary Search (requires sorted array, divides search space in half each time).",
                        code: `// Searching algorithms in C++
#include <iostream>
using namespace std;

// Linear Search
int linearSearch(int arr[], int n, int key) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Binary Search (requires sorted array)
int binarySearch(int arr[], int n, int key) {
    int left = 0;
    int right = n - 1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == key) {
            return mid;
        }
        
        if(arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}

int main() {
    // Linear Search Example
    int unsortedArr[] = {45, 23, 78, 12, 67, 34, 90, 11};
    int n1 = 8;
    int key1 = 67;
    
    cout << "Linear Search Example:" << endl;
    cout << "Searching for " << key1 << " in unsorted array..." << endl;
    int result1 = linearSearch(unsortedArr, n1, key1);
    
    if(result1 != -1) {
        cout << "Element found at index: " << result1 << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    // Binary Search Example
    int sortedArr[] = {11, 22, 33, 44, 55, 66, 77, 88, 99};
    int n2 = 9;
    int key2 = 55;
    
    cout << "\\nBinary Search Example:" << endl;
    cout << "Searching for " << key2 << " in sorted array..." << endl;
    int result2 = binarySearch(sortedArr, n2, key2);
    
    if(result2 != -1) {
        cout << "Element found at index: " << result2 << endl;
    } else {
        cout << "Element not found" << endl;
    }
    
    return 0;
}`
                    },
                    {
                        title: "Insertion and Deletion in Arrays",
                        content: "Insertion adds an element at a specified position, requiring shifting of elements. Deletion removes an element from a specified position, also requiring shifting of elements.",
                        code: `// Insertion and deletion in arrays in C++
#include <iostream>
using namespace std;

// Function to display array
void displayArray(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Insertion at specific position
int insertElement(int arr[], int &n, int capacity, int element, int position) {
    if(n >= capacity) {
        cout << "Array is full! Cannot insert." << endl;
        return n;
    }
    
    if(position < 0 || position > n) {
        cout << "Invalid position!" << endl;
        return n;
    }
    
    // Shift elements to the right
    for(int i = n; i > position; i--) {
        arr[i] = arr[i-1];
    }
    
    // Insert new element
    arr[position] = element;
    n++;
    
    return n;
}

// Deletion from specific position
int deleteElement(int arr[], int &n, int position) {
    if(n <= 0) {
        cout << "Array is empty! Cannot delete." << endl;
        return n;
    }
    
    if(position < 0 || position >= n) {
        cout << "Invalid position!" << endl;
        return n;
    }
    
    // Store the element to be deleted
    int deletedElement = arr[position];
    
    // Shift elements to the left
    for(int i = position; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
    
    n--;
    cout << "Deleted element: " << deletedElement << endl;
    
    return n;
}

int main() {
    const int CAPACITY = 10;
    int arr[CAPACITY] = {10, 20, 30, 40, 50};
    int n = 5;
    
    cout << "Original Array: ";
    displayArray(arr, n);
    
    // Insertion example
    cout << "\\nInserting 25 at position 2:" << endl;
    n = insertElement(arr, n, CAPACITY, 25, 2);
    cout << "Array after insertion: ";
    displayArray(arr, n);
    
    // Deletion example
    cout << "\\nDeleting element at position 3:" << endl;
    n = deleteElement(arr, n, 3);
    cout << "Array after deletion: ";
    displayArray(arr, n);
    
    // Insertion at the end
    cout << "\\nInserting 99 at the end:" << endl;
    n = insertElement(arr, n, CAPACITY, 99, n);
    cout << "Array after insertion at end: ";
    displayArray(arr, n);
    
    // Insertion at the beginning
    cout << "\\nInserting 5 at the beginning:" << endl;
    n = insertElement(arr, n, CAPACITY, 5, 0);
    cout << "Array after insertion at beginning: ";
    displayArray(arr, n);
    
    return 0;
}`
                    },
                    {
                        title: "Sorting and Merging Arrays",
                        content: "Sorting arranges elements in a specific order (ascending or descending). Merging combines two sorted arrays into a single sorted array.",
                        code: `// Sorting and merging arrays in C++
#include <iostream>
using namespace std;

// Bubble Sort Algorithm
void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// Merge two sorted arrays
void mergeSortedArrays(int arr1[], int n1, int arr2[], int n2, int result[]) {
    int i = 0, j = 0, k = 0;
    
    // Merge while both arrays have elements
    while(i < n1 && j < n2) {
        if(arr1[i] <= arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }
    
    // Copy remaining elements from arr1
    while(i < n1) {
        result[k++] = arr1[i++];
    }
    
    // Copy remaining elements from arr2
    while(j < n2) {
        result[k++] = arr2[j++];
    }
}

// Function to display array
void displayArray(int arr[], int n, string name) {
    cout << name << ": ";
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    // Sorting example
    int arr1[] = {64, 34, 25, 12, 22, 11, 90};
    int n1 = 7;
    
    cout << "Sorting Example (Bubble Sort):" << endl;
    displayArray(arr1, n1, "Original array");
    
    bubbleSort(arr1, n1);
    displayArray(arr1, n1, "Sorted array");
    
    // Merging example
    cout << "\\nMerging Example:" << endl;
    int sortedArr1[] = {10, 30, 50, 70, 90};
    int sortedArr2[] = {20, 40, 60, 80, 100};
    int n2 = 5, n3 = 5;
    
    displayArray(sortedArr1, n2, "Array 1");
    displayArray(sortedArr2, n3, "Array 2");
    
    int merged[10];
    mergeSortedArrays(sortedArr1, n2, sortedArr2, n3, merged);
    displayArray(merged, n2 + n3, "Merged array");
    
    // Selection Sort Algorithm
    cout << "\\nSelection Sort Example:" << endl;
    int arr2[] = {29, 10, 14, 37, 13};
    int n4 = 5;
    
    displayArray(arr2, n4, "Original array");
    
    for(int i = 0; i < n4-1; i++) {
        int minIndex = i;
        for(int j = i+1; j < n4; j++) {
            if(arr2[j] < arr2[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element
        int temp = arr2[i];
        arr2[i] = arr2[minIndex];
        arr2[minIndex] = temp;
    }
    
    displayArray(arr2, n4, "Sorted array");
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 4,
                title: "Linked Lists",
                topics: [
                    {
                        title: "Introduction to Linked Lists",
                        content: "A linked list is a linear data structure where elements (nodes) are stored at non-contiguous memory locations. Each node contains data and a pointer to the next node. Linked lists are dynamic and can grow/shrink at runtime.",
                        code: `// Linked list implementation in C++
#include <iostream>
using namespace std;

// Node structure for singly linked list
struct Node {
    int data;
    Node* next;
    
    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// Linked list class
class LinkedList {
private:
    Node* head;
    
public:
    LinkedList() {
        head = nullptr;
    }
    
    // Insert at the beginning
    void insertAtBeginning(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        cout << "Inserted " << val << " at the beginning." << endl;
    }
    
    // Insert at the end
    void insertAtEnd(int val) {
        Node* newNode = new Node(val);
        
        if(head == nullptr) {
            head = newNode;
        } else {
            Node* temp = head;
            while(temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newNode;
        }
        cout << "Inserted " << val << " at the end." << endl;
    }
    
    // Display the linked list
    void display() {
        if(head == nullptr) {
            cout << "List is empty." << endl;
            return;
        }
        
        Node* temp = head;
        cout << "Linked List: ";
        while(temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    // Search for a value
    bool search(int val) {
        Node* temp = head;
        while(temp != nullptr) {
            if(temp->data == val) {
                return true;
            }
            temp = temp->next;
        }
        return false;
    }
    
    // Delete a node by value
    void deleteNode(int val) {
        if(head == nullptr) {
            cout << "List is empty. Cannot delete." << endl;
            return;
        }
        
        // If head node needs to be deleted
        if(head->data == val) {
            Node* temp = head;
            head = head->next;
            delete temp;
            cout << "Deleted " << val << " from the list." << endl;
            return;
        }
        
        // Search for the node to delete
        Node* current = head;
        Node* prev = nullptr;
        
        while(current != nullptr && current->data != val) {
            prev = current;
            current = current->next;
        }
        
        // If value not found
        if(current == nullptr) {
            cout << "Value " << val << " not found in the list." << endl;
            return;
        }
        
        // Unlink the node
        prev->next = current->next;
        delete current;
        cout << "Deleted " << val << " from the list." << endl;
    }
};

int main() {
    LinkedList list;
    
    // Insert elements
    list.insertAtEnd(10);
    list.insertAtEnd(20);
    list.insertAtEnd(30);
    list.insertAtBeginning(5);
    list.insertAtEnd(40);
    
    // Display the list
    list.display();
    
    // Search for elements
    cout << "\\nSearching for 20: " << (list.search(20) ? "Found" : "Not found") << endl;
    cout << "Searching for 25: " << (list.search(25) ? "Found" : "Not found") << endl;
    
    // Delete elements
    list.deleteNode(20);
    list.display();
    
    list.deleteNode(5);
    list.display();
    
    list.deleteNode(40);
    list.display();
    
    // Try to delete non-existent element
    list.deleteNode(100);
    
    return 0;
}`
                    },
                    {
                        title: "Memory Allocation & Operations",
                        content: "Linked lists use dynamic memory allocation (new/delete in C++). Overflow occurs when memory cannot be allocated for a new node. Underflow occurs when trying to delete from an empty list. Basic operations include insertion, deletion, traversal, and searching.",
                        code: `// Memory management and advanced operations in linked lists
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    
    Node(int val) {
        data = val;
        next = nullptr;
    }
};

class AdvancedLinkedList {
private:
    Node* head;
    int nodeCount;
    
public:
    AdvancedLinkedList() {
        head = nullptr;
        nodeCount = 0;
    }
    
    // Insert at specific position (1-based indexing)
    void insertAtPosition(int val, int position) {
        // Handle invalid positions
        if(position < 1 || position > nodeCount + 1) {
            cout << "Invalid position! Position should be between 1 and " << nodeCount + 1 << endl;
            return;
        }
        
        Node* newNode = new Node(val);
        
        // Insert at beginning (position 1)
        if(position == 1) {
            newNode->next = head;
            head = newNode;
        } else {
            // Traverse to the position just before where we want to insert
            Node* temp = head;
            for(int i = 1; i < position - 1; i++) {
                temp = temp->next;
            }
            
            // Insert the new node
            newNode->next = temp->next;
            temp->next = newNode;
        }
        
        nodeCount++;
        cout << "Inserted " << val << " at position " << position << endl;
    }
    
    // Reverse the linked list
    void reverse() {
        Node* prev = nullptr;
        Node* current = head;
        Node* next = nullptr;
        
        while(current != nullptr) {
            next = current->next;  // Store next node
            current->next = prev;   // Reverse current node's pointer
            prev = current;         // Move pointers one position ahead
            current = next;
        }
        
        head = prev;
        cout << "List reversed successfully." << endl;
    }
    
    // Find the middle node
    Node* findMiddle() {
        if(head == nullptr) {
            return nullptr;
        }
        
        Node* slow = head;
        Node* fast = head;
        
        while(fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
    
    // Detect if list has a cycle (Floyd's Cycle Detection Algorithm)
    bool hasCycle() {
        if(head == nullptr) {
            return false;
        }
        
        Node* slow = head;
        Node* fast = head;
        
        while(fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            
            if(slow == fast) {
                return true;  // Cycle detected
            }
        }
        
        return false;  // No cycle
    }
    
    // Display the linked list
    void display() {
        if(head == nullptr) {
            cout << "List is empty." << endl;
            return;
        }
        
        Node* temp = head;
        cout << "Linked List (" << nodeCount << " nodes): ";
        while(temp != nullptr) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
    
    // Get the length of the list
    int getLength() {
        return nodeCount;
    }
    
    // Create a cycle for testing (connect last node to node at position)
    void createCycle(int position) {
        if(position < 1 || position > nodeCount) {
            cout << "Invalid position for cycle creation." << endl;
            return;
        }
        
        // Find last node
        Node* last = head;
        while(last->next != nullptr) {
            last = last->next;
        }
        
        // Find node at specified position
        Node* cycleNode = head;
        for(int i = 1; i < position; i++) {
            cycleNode = cycleNode->next;
        }
        
        // Create cycle
        last->next = cycleNode;
        cout << "Cycle created: last node points to node at position " << position << endl;
    }
};

int main() {
    AdvancedLinkedList list;
    
    // Insert elements at various positions
    list.insertAtPosition(10, 1);  // List: 10
    list.insertAtPosition(20, 2);  // List: 10 -> 20
    list.insertAtPosition(15, 2);  // List: 10 -> 15 -> 20
    list.insertAtPosition(5, 1);   // List: 5 -> 10 -> 15 -> 20
    list.insertAtPosition(25, 5);  // List: 5 -> 10 -> 15 -> 20 -> 25
    
    list.display();
    
    // Find middle node
    Node* middle = list.findMiddle();
    if(middle != nullptr) {
        cout << "Middle node value: " << middle->data << endl;
    }
    
    // Reverse the list
    list.reverse();
    list.display();
    
    // Check for cycle (should be false)
    cout << "Cycle detected: " << (list.hasCycle() ? "Yes" : "No") << endl;
    
    // Create a cycle and check again
    list.createCycle(2);
    cout << "Cycle detected: " << (list.hasCycle() ? "Yes" : "No") << endl;
    
    // Note: Don't try to display or traverse a list with a cycle
    // as it will cause an infinite loop
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 5,
                title: "Stacks",
                topics: [
                    {
                        title: "Stack Implementation & Operations",
                        content: "A stack is a linear data structure that follows LIFO (Last In First Out) principle. Basic operations are push (add element), pop (remove element), and peek (view top element).",
                        code: `// Stack implementation using array in C++
#include <iostream>
using namespace std;

class Stack {
private:
    int* arr;
    int top;
    int capacity;
    
public:
    // Constructor
    Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;  // Stack is initially empty
    }
    
    // Destructor
    ~Stack() {
        delete[] arr;
    }
    
    // Push operation
    void push(int x) {
        if(isFull()) {
            cout << "Stack Overflow! Cannot push " << x << endl;
            return;
        }
        arr[++top] = x;
        cout << "Pushed " << x << " to stack." << endl;
    }
    
    // Pop operation
    int pop() {
        if(isEmpty()) {
            cout << "Stack Underflow! Cannot pop from empty stack." << endl;
            return -1;
        }
        int poppedValue = arr[top--];
        cout << "Popped " << poppedValue << " from stack." << endl;
        return poppedValue;
    }
    
    // Peek operation
    int peek() {
        if(isEmpty()) {
            cout << "Stack is empty." << endl;
            return -1;
        }
        return arr[top];
    }
    
    // Check if stack is empty
    bool isEmpty() {
        return top == -1;
    }
    
    // Check if stack is full
    bool isFull() {
        return top == capacity - 1;
    }
    
    // Get current size
    int size() {
        return top + 1;
    }
    
    // Display stack
    void display() {
        if(isEmpty()) {
            cout << "Stack is empty." << endl;
            return;
        }
        
        cout << "Stack (from top to bottom): ";
        for(int i = top; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack stack(5);
    
    // Push operations
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    
    // Try to push when stack is full
    stack.push(60);
    
    // Display stack
    stack.display();
    
    // Peek at top element
    cout << "Top element: " << stack.peek() << endl;
    
    // Pop operations
    stack.pop();
    stack.pop();
    
    // Display after pops
    stack.display();
    
    // Check size
    cout << "Current stack size: " << stack.size() << endl;
    
    // Pop remaining elements
    stack.pop();
    stack.pop();
    stack.pop();
    
    // Try to pop from empty stack
    stack.pop();
    
    return 0;
}`
                    },
                    {
                        title: "Expression Evaluation",
                        content: "Stacks are used to evaluate postfix expressions and convert infix expressions to postfix. Postfix notation (Reverse Polish Notation) places the operator after the operands.",
                        code: `// Expression evaluation using stacks in C++
#include <iostream>
#include <stack>
#include <string>
#include <cctype>
#include <cmath>
using namespace std;

// Function to check if a character is an operator
bool isOperator(char c) {
    return (c == '+' || c == '-' || c == '*' || c == '/' || c == '^');
}

// Function to get precedence of an operator
int getPrecedence(char op) {
    if(op == '^') return 3;
    if(op == '*' || op == '/') return 2;
    if(op == '+' || op == '-') return 1;
    return 0;
}

// Function to perform an operation
int performOperation(int a, int b, char op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if(b == 0) {
                cout << "Error: Division by zero!" << endl;
                return 0;
            }
            return a / b;
        case '^': return pow(a, b);
        default: return 0;
    }
}

// Evaluate postfix expression
int evaluatePostfix(string expression) {
    stack<int> s;
    
    for(int i = 0; i < expression.length(); i++) {
        char c = expression[i];
        
        // If character is a digit, push it to stack
        if(isdigit(c)) {
            s.push(c - '0');  // Convert char to int
        }
        // If character is an operator
        else if(isOperator(c)) {
            // Pop two operands
            int operand2 = s.top(); s.pop();
            int operand1 = s.top(); s.pop();
            
            // Perform operation and push result
            int result = performOperation(operand1, operand2, c);
            s.push(result);
        }
    }
    
    // The final result is at the top of the stack
    return s.top();
}

// Convert infix to postfix
string infixToPostfix(string infix) {
    stack<char> s;
    string postfix = "";
    
    for(int i = 0; i < infix.length(); i++) {
        char c = infix[i];
        
        // If character is an operand, add to output
        if(isalnum(c)) {
            postfix += c;
        }
        // If character is '(', push to stack
        else if(c == '(') {
            s.push(c);
        }
        // If character is ')', pop until '('
        else if(c == ')') {
            while(!s.empty() && s.top() != '(') {
                postfix += s.top();
                s.pop();
            }
            s.pop();  // Remove '(' from stack
        }
        // If character is an operator
        else if(isOperator(c)) {
            while(!s.empty() && getPrecedence(s.top()) >= getPrecedence(c)) {
                postfix += s.top();
                s.pop();
            }
            s.push(c);
        }
    }
    
    // Pop remaining operators from stack
    while(!s.empty()) {
        postfix += s.top();
        s.pop();
    }
    
    return postfix;
}

int main() {
    cout << "Postfix Expression Evaluation:" << endl;
    
    // Example 1: Simple postfix evaluation
    string postfix1 = "23+5*";
    cout << "Postfix expression: " << postfix1 << endl;
    cout << "Result: " << evaluatePostfix(postfix1) << endl;
    
    // Example 2: More complex postfix
    string postfix2 = "53+82-*";
    cout << "\\nPostfix expression: " << postfix2 << endl;
    cout << "Result: " << evaluatePostfix(postfix2) << endl;
    
    cout << "\\nInfix to Postfix Conversion:" << endl;
    
    // Example 1: Simple infix to postfix
    string infix1 = "A+B*C";
    cout << "Infix expression: " << infix1 << endl;
    cout << "Postfix expression: " << infixToPostfix(infix1) << endl;
    
    // Example 2: With parentheses
    string infix2 = "(A+B)*(C-D)";
    cout << "\\nInfix expression: " << infix2 << endl;
    cout << "Postfix expression: " << infixToPostfix(infix2) << endl;
    
    // Example 3: Numerical expression
    string infix3 = "2+3*4-5";
    cout << "\\nInfix expression: " << infix3 << endl;
    string postfix3 = infixToPostfix(infix3);
    cout << "Postfix expression: " << postfix3 << endl;
    cout << "Evaluated result: " << evaluatePostfix(postfix3) << endl;
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 6,
                title: "Queues",
                topics: [
                    {
                        title: "Queue Operations",
                        content: "A queue is a linear data structure that follows FIFO (First In First Out) principle. Basic operations are enqueue (add element at rear) and dequeue (remove element from front).",
                        code: `// Queue implementation using array in C++
#include <iostream>
using namespace std;

class Queue {
private:
    int* arr;
    int front;
    int rear;
    int capacity;
    int count;
    
public:
    // Constructor
    Queue(int size) {
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        count = 0;
    }
    
    // Destructor
    ~Queue() {
        delete[] arr;
    }
    
    // Enqueue operation
    void enqueue(int x) {
        if(isFull()) {
            cout << "Queue Overflow! Cannot enqueue " << x << endl;
            return;
        }
        
        rear = (rear + 1) % capacity;  // Circular increment
        arr[rear] = x;
        count++;
        cout << "Enqueued " << x << " to queue." << endl;
    }
    
    // Dequeue operation
    int dequeue() {
        if(isEmpty()) {
            cout << "Queue Underflow! Cannot dequeue from empty queue." << endl;
            return -1;
        }
        
        int dequeuedValue = arr[front];
        front = (front + 1) % capacity;  // Circular increment
        count--;
        cout << "Dequeued " << dequeuedValue << " from queue." << endl;
        return dequeuedValue;
    }
    
    // Peek at front element
    int peek() {
        if(isEmpty()) {
            cout << "Queue is empty." << endl;
            return -1;
        }
        return arr[front];
    }
    
    // Peek at rear element
    int rearElement() {
        if(isEmpty()) {
            cout << "Queue is empty." << endl;
            return -1;
        }
        return arr[rear];
    }
    
    // Check if queue is empty
    bool isEmpty() {
        return count == 0;
    }
    
    // Check if queue is full
    bool isFull() {
        return count == capacity;
    }
    
    // Get current size
    int size() {
        return count;
    }
    
    // Display queue
    void display() {
        if(isEmpty()) {
            cout << "Queue is empty." << endl;
            return;
        }
        
        cout << "Queue (from front to rear): ";
        int i = front;
        for(int j = 0; j < count; j++) {
            cout << arr[i] << " ";
            i = (i + 1) % capacity;  // Circular increment
        }
        cout << endl;
    }
};

int main() {
    Queue queue(5);
    
    // Enqueue operations
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    
    // Try to enqueue when queue is full
    queue.enqueue(60);
    
    // Display queue
    queue.display();
    
    // Peek at front and rear
    cout << "Front element: " << queue.peek() << endl;
    cout << "Rear element: " << queue.rearElement() << endl;
    
    // Dequeue operations
    queue.dequeue();
    queue.dequeue();
    
    // Display after dequeues
    queue.display();
    
    // Enqueue more elements (circular behavior)
    queue.enqueue(60);
    queue.enqueue(70);
    
    // Display final queue
    queue.display();
    
    // Check size
    cout << "Current queue size: " << queue.size() << endl;
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 7,
                title: "Trees",
                topics: [
                    {
                        title: "Binary Trees & Terminology",
                        content: "A binary tree is a hierarchical data structure where each node has at most two children (left and right). Key terminology: root, parent, child, leaf, subtree, depth, height, level.",
                        code: `// Binary Tree implementation in C++
#include <iostream>
#include <queue>
using namespace std;

// Node structure for binary tree
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int val) {
        data = val;
        left = nullptr;
        right = nullptr;
    }
};

class BinaryTree {
private:
    TreeNode* root;
    
public:
    BinaryTree() {
        root = nullptr;
    }
    
    // Insert a node (level order insertion)
    void insert(int val) {
        TreeNode* newNode = new TreeNode(val);
        
        if(root == nullptr) {
            root = newNode;
            cout << "Inserted " << val << " as root." << endl;
            return;
        }
        
        // Use queue for level order traversal to find insertion point
        queue<TreeNode*> q;
        q.push(root);
        
        while(!q.empty()) {
            TreeNode* current = q.front();
            q.pop();
            
            // Check left child
            if(current->left == nullptr) {
                current->left = newNode;
                cout << "Inserted " << val << " as left child of " << current->data << endl;
                return;
            } else {
                q.push(current->left);
            }
            
            // Check right child
            if(current->right == nullptr) {
                current->right = newNode;
                cout << "Inserted " << val << " as right child of " << current->data << endl;
                return;
            } else {
                q.push(current->right);
            }
        }
    }
    
    // Tree Traversal Methods
    
    // Preorder: Root -> Left -> Right
    void preorder(TreeNode* node) {
        if(node == nullptr) return;
        
        cout << node->data << " ";
        preorder(node->left);
        preorder(node->right);
    }
    
    // Inorder: Left -> Root -> Right
    void inorder(TreeNode* node) {
        if(node == nullptr) return;
        
        inorder(node->left);
        cout << node->data << " ";
        inorder(node->right);
    }
    
    // Postorder: Left -> Right -> Root
    void postorder(TreeNode* node) {
        if(node == nullptr) return;
        
        postorder(node->left);
        postorder(node->right);
        cout << node->data << " ";
    }
    
    // Level Order Traversal (BFS)
    void levelOrder() {
        if(root == nullptr) {
            cout << "Tree is empty." << endl;
            return;
        }
        
        queue<TreeNode*> q;
        q.push(root);
        
        cout << "Level Order Traversal: ";
        while(!q.empty()) {
            TreeNode* current = q.front();
            q.pop();
            
            cout << current->data << " ";
            
            if(current->left != nullptr) {
                q.push(current->left);
            }
            
            if(current->right != nullptr) {
                q.push(current->right);
            }
        }
        cout << endl;
    }
    
    // Calculate height of tree
    int height(TreeNode* node) {
        if(node == nullptr) {
            return 0;
        }
        
        int leftHeight = height(node->left);
        int rightHeight = height(node->right);
        
        return max(leftHeight, rightHeight) + 1;
    }
    
    // Count total nodes
    int countNodes(TreeNode* node) {
        if(node == nullptr) {
            return 0;
        }
        
        return 1 + countNodes(node->left) + countNodes(node->right);
    }
    
    // Check if tree is complete
    bool isComplete(TreeNode* node, int index, int nodeCount) {
        if(node == nullptr) {
            return true;
        }
        
        if(index >= nodeCount) {
            return false;
        }
        
        return isComplete(node->left, 2*index + 1, nodeCount) &&
               isComplete(node->right, 2*index + 2, nodeCount);
    }
    
    // Wrapper functions to call from main
    void displayPreorder() {
        cout << "Preorder Traversal: ";
        preorder(root);
        cout << endl;
    }
    
    void displayInorder() {
        cout << "Inorder Traversal: ";
        inorder(root);
        cout << endl;
    }
    
    void displayPostorder() {
        cout << "Postorder Traversal: ";
        postorder(root);
        cout << endl;
    }
    
    void displayHeight() {
        cout << "Tree Height: " << height(root) << endl;
    }
    
    void displayNodeCount() {
        cout << "Total Nodes: " << countNodes(root) << endl;
    }
    
    void checkIfComplete() {
        int nodeCount = countNodes(root);
        bool complete = isComplete(root, 0, nodeCount);
        cout << "Is Complete Binary Tree: " << (complete ? "Yes" : "No") << endl;
    }
    
    // Get root node (for testing purposes)
    TreeNode* getRoot() {
        return root;
    }
};

int main() {
    BinaryTree tree;
    
    // Insert elements to create a binary tree
    cout << "Inserting elements into binary tree:" << endl;
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    
    cout << endl;
    
    // Display different traversals
    tree.displayPreorder();
    tree.displayInorder();
    tree.displayPostorder();
    tree.levelOrder();
    
    cout << endl;
    
    // Display tree properties
    tree.displayHeight();
    tree.displayNodeCount();
    tree.checkIfComplete();
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 8,
                title: "Graphs",
                topics: [
                    {
                        title: "Graph Fundamentals",
                        content: "A graph is a non-linear data structure consisting of vertices (nodes) and edges connecting them. Graphs can be directed/undirected, weighted/unweighted. Applications include social networks, maps, network routing, and recommendation systems.",
                        code: `// Graph implementation using adjacency list in C++
#include <iostream>
#include <list>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

class Graph {
private:
    int numVertices;
    vector<list<int>> adjList;
    bool isDirected;
    
public:
    // Constructor
    Graph(int vertices, bool directed = false) {
        numVertices = vertices;
        isDirected = directed;
        adjList.resize(vertices);
    }
    
    // Add edge to graph
    void addEdge(int src, int dest) {
        if(src >= numVertices || dest >= numVertices) {
            cout << "Invalid vertex!" << endl;
            return;
        }
        
        adjList[src].push_back(dest);
        
        // If graph is undirected, add edge in both directions
        if(!isDirected) {
            adjList[dest].push_back(src);
        }
        
        cout << "Added edge: " << src << " -> " << dest << endl;
    }
    
    // Display adjacency list
    void display() {
        cout << "\\nAdjacency List:" << endl;
        for(int i = 0; i < numVertices; i++) {
            cout << "Vertex " << i << ": ";
            for(auto neighbor : adjList[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
    
    // Breadth First Search (BFS)
    void BFS(int startVertex) {
        vector<bool> visited(numVertices, false);
        queue<int> q;
        
        cout << "BFS starting from vertex " << startVertex << ": ";
        
        visited[startVertex] = true;
        q.push(startVertex);
        
        while(!q.empty()) {
            int current = q.front();
            q.pop();
            cout << current << " ";
            
            // Visit all adjacent vertices
            for(auto neighbor : adjList[current]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        cout << endl;
    }
    
    // Depth First Search (DFS) - iterative
    void DFS(int startVertex) {
        vector<bool> visited(numVertices, false);
        stack<int> s;
        
        cout << "DFS (iterative) starting from vertex " << startVertex << ": ";
        
        s.push(startVertex);
        
        while(!s.empty()) {
            int current = s.top();
            s.pop();
            
            if(!visited[current]) {
                visited[current] = true;
                cout << current << " ";
                
                // Push all adjacent vertices (in reverse order for natural DFS)
                stack<int> temp;
                for(auto neighbor : adjList[current]) {
                    if(!visited[neighbor]) {
                        temp.push(neighbor);
                    }
                }
                
                // Transfer from temp stack to main stack
                while(!temp.empty()) {
                    s.push(temp.top());
                    temp.pop();
                }
            }
        }
        cout << endl;
    }
    
    // DFS - recursive helper
    void DFSUtil(int vertex, vector<bool>& visited) {
        visited[vertex] = true;
        cout << vertex << " ";
        
        for(auto neighbor : adjList[vertex]) {
            if(!visited[neighbor]) {
                DFSUtil(neighbor, visited);
            }
        }
    }
    
    // DFS - recursive
    void DFSRecursive(int startVertex) {
        vector<bool> visited(numVertices, false);
        cout << "DFS (recursive) starting from vertex " << startVertex << ": ";
        DFSUtil(startVertex, visited);
        cout << endl;
    }
    
    // Check if graph is connected (for undirected graphs)
    bool isConnected() {
        if(isDirected) {
            cout << "Connectivity check is for undirected graphs only." << endl;
            return false;
        }
        
        vector<bool> visited(numVertices, false);
        queue<int> q;
        
        // Start BFS from vertex 0
        visited[0] = true;
        q.push(0);
        
        int count = 1;  // Count visited vertices
        
        while(!q.empty()) {
            int current = q.front();
            q.pop();
            
            for(auto neighbor : adjList[current]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                    count++;
                }
            }
        }
        
        return count == numVertices;
    }
    
    // Count degree of a vertex (for undirected graphs)
    int degree(int vertex) {
        if(vertex >= numVertices) {
            cout << "Invalid vertex!" << endl;
            return -1;
        }
        
        return adjList[vertex].size();
    }
};

int main() {
    // Create an undirected graph
    cout << "Creating an undirected graph with 7 vertices:" << endl;
    Graph undirectedGraph(7, false);
    
    // Add edges
    undirectedGraph.addEdge(0, 1);
    undirectedGraph.addEdge(0, 2);
    undirectedGraph.addEdge(1, 3);
    undirectedGraph.addEdge(1, 4);
    undirectedGraph.addEdge(2, 5);
    undirectedGraph.addEdge(2, 6);
    undirectedGraph.addEdge(3, 4);
    
    // Display adjacency list
    undirectedGraph.display();
    
    // Traversal algorithms
    undirectedGraph.BFS(0);
    undirectedGraph.DFS(0);
    undirectedGraph.DFSRecursive(0);
    
    // Check connectivity
    cout << "\\nIs the graph connected? " << (undirectedGraph.isConnected() ? "Yes" : "No") << endl;
    
    // Check degrees
    cout << "\\nVertex degrees:" << endl;
    for(int i = 0; i < 7; i++) {
        cout << "Degree of vertex " << i << ": " << undirectedGraph.degree(i) << endl;
    }
    
    cout << "\\n" << string(50, '-') << "\\n";
    
    // Create a directed graph
    cout << "\\nCreating a directed graph with 5 vertices:" << endl;
    Graph directedGraph(5, true);
    
    // Add edges
    directedGraph.addEdge(0, 1);
    directedGraph.addEdge(0, 2);
    directedGraph.addEdge(1, 3);
    directedGraph.addEdge(2, 4);
    directedGraph.addEdge(3, 4);
    
    // Display adjacency list
    directedGraph.display();
    
    // Traversal algorithms
    directedGraph.BFS(0);
    directedGraph.DFS(0);
    
    return 0;
}`
                    },
                    {
                        title: "Trees vs Graphs",
                        content: "Trees are a special type of graph with no cycles and a hierarchical structure. All trees are graphs but not all graphs are trees. Key differences: trees have exactly n-1 edges for n nodes, graphs can have any number of edges; trees have a root node, graphs don't necessarily have hierarchy.",
                        code: `// Comparing Trees and Graphs in C++
#include <iostream>
#include <vector>
#include <list>
using namespace std;

// Simple Tree Node
struct TreeNode {
    int data;
    vector<TreeNode*> children;
    
    TreeNode(int val) {
        data = val;
    }
};

// Simple Graph Node
struct GraphNode {
    int data;
    list<GraphNode*> neighbors;
    
    GraphNode(int val) {
        data = val;
    }
};

class Comparison {
public:
    // Tree Properties
    static void demonstrateTreeProperties() {
        cout << "TREE PROPERTIES:" << endl;
        cout << "1. Hierarchical structure with a root node" << endl;
        cout << "2. Exactly n-1 edges for n nodes" << endl;
        cout << "3. No cycles present" << endl;
        cout << "4. Only one path between any two nodes" << endl;
        cout << "5. Can be traversed using preorder, inorder, postorder" << endl;
        
        // Create a simple tree
        TreeNode* root = new TreeNode(1);
        TreeNode* child1 = new TreeNode(2);
        TreeNode* child2 = new TreeNode(3);
        TreeNode* grandchild1 = new TreeNode(4);
        TreeNode* grandchild2 = new TreeNode(5);
        
        root->children.push_back(child1);
        root->children.push_back(child2);
        child1->children.push_back(grandchild1);
        child1->children.push_back(grandchild2);
        
        cout << "\\nExample Tree Structure:" << endl;
        cout << "       1" << endl;
        cout << "      / \\\\" << endl;
        cout << "     2   3" << endl;
        cout << "    / \\\\" << endl;
        cout << "   4   5" << endl;
        
        // Calculate edges
        int nodes = 5;
        int edges = nodes - 1;
        cout << "\\nTree with " << nodes << " nodes has " << edges << " edges." << endl;
        
        // Clean up
        delete root; delete child1; delete child2;
        delete grandchild1; delete grandchild2;
    }
    
    // Graph Properties
    static void demonstrateGraphProperties() {
        cout << "\\n" << string(50, '=') << endl;
        cout << "GRAPH PROPERTIES:" << endl;
        cout << "1. Non-hierarchical structure" << endl;
        cout << "2. Can have any number of edges" << endl;
        cout << "3. May contain cycles" << endl;
        cout << "4. Multiple paths between nodes possible" << endl;
        cout << "5. Traversed using BFS and DFS" << endl;
        
        // Create a simple graph
        GraphNode* node0 = new GraphNode(0);
        GraphNode* node1 = new GraphNode(1);
        GraphNode* node2 = new GraphNode(2);
        GraphNode* node3 = new GraphNode(3);
        
        // Create edges (forming a cycle)
        node0->neighbors.push_back(node1);
        node0->neighbors.push_back(node2);
        node1->neighbors.push_back(node2);
        node1->neighbors.push_back(node3);
        node2->neighbors.push_back(node0);  // Creates a cycle
        node2->neighbors.push_back(node3);
        node3->neighbors.push_back(node1);
        
        cout << "\\nExample Graph Structure (with cycle):" << endl;
        cout << "    0 ----- 1" << endl;
        cout << "    | \\\\   / |" << endl;
        cout << "    |  \\\\ /  |" << endl;
        cout << "    |   X    |" << endl;
        cout << "    |  / \\\\  |" << endl;
        cout << "    | /   \\\\ |" << endl;
        cout << "    2 ----- 3" << endl;
        
        // Calculate edges
        int nodes = 4;
        int edges = 7;  // More than n-1
        cout << "\\nGraph with " << nodes << " nodes has " << edges << " edges." << endl;
        cout << "This graph contains cycles." << endl;
        
        // Check for multiple paths
        cout << "Multiple paths exist between nodes 0 and 3:" << endl;
        cout << "Path 1: 0 -> 1 -> 3" << endl;
        cout << "Path 2: 0 -> 2 -> 3" << endl;
        
        // Clean up
        delete node0; delete node1; delete node2; delete node3;
    }
    
    // Comparison Table
    static void displayComparisonTable() {
        cout << "\\n" << string(50, '=') << endl;
        cout << "COMPARISON TABLE: TREES vs GRAPHS" << endl;
        cout << string(50, '=') << endl;
        
        cout << "\\n+----------------------+----------------------+" << endl;
        cout << "| TREES                | GRAPHS               |" << endl;
        cout << "+----------------------+----------------------+" << endl;
        cout << "| Hierarchical         | Non-hierarchical     |" << endl;
        cout << "| Root exists          | No root              |" << endl;
        cout << "| n-1 edges for n nodes| Any number of edges  |" << endl;
        cout << "| No cycles            | May contain cycles   |" << endl;
        cout << "| Single path between  | Multiple paths       |" << endl;
        cout << "| any two nodes        | possible             |" << endl;
        cout << "| Parent-child         | General relationships|" << endl;
        cout << "| relationships        |                      |" << endl;
        cout << "| Easier to traverse   | More complex         |" << endl;
        cout << "| and search           | traversal            |" << endl;
        cout << "+----------------------+----------------------+" << endl;
    }
};

int main() {
    Comparison::demonstrateTreeProperties();
    Comparison::demonstrateGraphProperties();
    Comparison::displayComparisonTable();
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 9,
                title: "Searching Algorithms",
                topics: [
                    {
                        title: "Linear Search & Binary Search",
                        content: "Linear search checks each element sequentially until the target is found. Binary search repeatedly divides the search interval in half, requiring the array to be sorted.",
                        code: `// Searching algorithms implementation in C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <chrono>
using namespace std;
using namespace std::chrono;

class SearchAlgorithms {
public:
    // Linear Search
    static int linearSearch(const vector<int>& arr, int target) {
        for(int i = 0; i < arr.size(); i++) {
            if(arr[i] == target) {
                return i;  // Return index if found
            }
        }
        return -1;  // Return -1 if not found
    }
    
    // Binary Search (Iterative)
    static int binarySearchIterative(const vector<int>& arr, int target) {
        int left = 0;
        int right = arr.size() - 1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) {
                return mid;
            }
            
            if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;  // Target not found
    }
    
    // Binary Search (Recursive)
    static int binarySearchRecursive(const vector<int>& arr, int target, int left, int right) {
        if(left > right) {
            return -1;  // Base case: target not found
        }
        
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == target) {
            return mid;
        }
        
        if(arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    
    // Display array
    static void displayArray(const vector<int>& arr, string name) {
        cout << name << ": ";
        for(int num : arr) {
            cout << num << " ";
        }
        cout << endl;
    }
    
    // Measure execution time
    static void measurePerformance(const vector<int>& arr, int target) {
        cout << "\\nPerformance Comparison (searching for " << target << "):" << endl;
        cout << string(50, '-') << endl;
        
        // Linear Search
        auto start = high_resolution_clock::now();
        int linearResult = linearSearch(arr, target);
        auto stop = high_resolution_clock::now();
        auto linearDuration = duration_cast<microseconds>(stop - start);
        
        cout << "Linear Search:" << endl;
        cout << "  Result: " << (linearResult != -1 ? "Found at index " + to_string(linearResult) : "Not found") << endl;
        cout << "  Time: " << linearDuration.count() << " microseconds" << endl;
        
        // Binary Search (Iterative)
        start = high_resolution_clock::now();
        int binaryIterResult = binarySearchIterative(arr, target);
        stop = high_resolution_clock::now();
        auto binaryIterDuration = duration_cast<microseconds>(stop - start);
        
        cout << "\\nBinary Search (Iterative):" << endl;
        cout << "  Result: " << (binaryIterResult != -1 ? "Found at index " + to_string(binaryIterResult) : "Not found") << endl;
        cout << "  Time: " << binaryIterDuration.count() << " microseconds" << endl;
        
        // Binary Search (Recursive)
        start = high_resolution_clock::now();
        int binaryRecResult = binarySearchRecursive(arr, target, 0, arr.size() - 1);
        stop = high_resolution_clock::now();
        auto binaryRecDuration = duration_cast<microseconds>(stop - start);
        
        cout << "\\nBinary Search (Recursive):" << endl;
        cout << "  Result: " << (binaryRecResult != -1 ? "Found at index " + to_string(binaryRecResult) : "Not found") << endl;
        cout << "  Time: " << binaryRecDuration.count() << " microseconds" << endl;
        
        // Efficiency comparison
        cout << "\\nEfficiency Analysis:" << endl;
        cout << "  Linear Search Time Complexity: O(n)" << endl;
        cout << "  Binary Search Time Complexity: O(log n)" << endl;
        
        if(linearResult != -1 && binaryIterResult != -1) {
            double speedup = (double)linearDuration.count() / binaryIterDuration.count();
            cout << "  Binary search is approximately " << speedup << " times faster for this search." << endl;
        }
    }
    
    // Demonstrate search process step by step
    static void demonstrateBinarySearchStepByStep(const vector<int>& arr, int target) {
        cout << "\\nBinary Search Step-by-Step Process:" << endl;
        cout << "Searching for " << target << " in sorted array." << endl;
        
        int left = 0;
        int right = arr.size() - 1;
        int step = 1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            cout << "\\nStep " << step++ << ":" << endl;
            cout << "  Search range: indices " << left << " to " << right << endl;
            cout << "  Middle index: " << mid << " (value: " << arr[mid] << ")" << endl;
            
            if(arr[mid] == target) {
                cout << "  Found target at index " << mid << "!" << endl;
                return;
            }
            
            if(arr[mid] < target) {
                cout << "  " << arr[mid] << " < " << target << ", searching right half." << endl;
                left = mid + 1;
            } else {
                cout << "  " << arr[mid] << " > " << target << ", searching left half." << endl;
                right = mid - 1;
            }
        }
        
        cout << "\\nTarget not found in the array." << endl;
    }
};

int main() {
    // Create test arrays
    vector<int> unsortedArray = {42, 17, 89, 5, 23, 56, 71, 38, 92, 10};
    vector<int> sortedArray = {5, 10, 17, 23, 38, 42, 56, 71, 89, 92};
    
    // Display arrays
    SearchAlgorithms::displayArray(unsortedArray, "Unsorted Array");
    SearchAlgorithms::displayArray(sortedArray, "Sorted Array");
    
    // Test Linear Search on unsorted array
    cout << "\\n=== LINEAR SEARCH DEMONSTRATION ===" << endl;
    int target1 = 23;
    int result1 = SearchAlgorithms::linearSearch(unsortedArray, target1);
    cout << "Searching for " << target1 << " in unsorted array: ";
    if(result1 != -1) {
        cout << "Found at index " << result1 << endl;
    } else {
        cout << "Not found" << endl;
    }
    
    int target2 = 100;
    int result2 = SearchAlgorithms::linearSearch(unsortedArray, target2);
    cout << "Searching for " << target2 << " in unsorted array: ";
    if(result2 != -1) {
        cout << "Found at index " << result2 << endl;
    } else {
        cout << "Not found" << endl;
    }
    
    // Test Binary Search on sorted array
    cout << "\\n=== BINARY SEARCH DEMONSTRATION ===" << endl;
    int target3 = 42;
    int result3 = SearchAlgorithms::binarySearchIterative(sortedArray, target3);
    cout << "Searching for " << target3 << " in sorted array: ";
    if(result3 != -1) {
        cout << "Found at index " << result3 << endl;
    } else {
        cout << "Not found" << endl;
    }
    
    // Demonstrate step-by-step binary search
    SearchAlgorithms::demonstrateBinarySearchStepByStep(sortedArray, target3);
    
    // Performance comparison
    cout << "\\n=== PERFORMANCE COMPARISON ===" << endl;
    
    // Create a larger sorted array for performance testing
    vector<int> largeArray;
    for(int i = 0; i < 10000; i++) {
        largeArray.push_back(i * 2);  // Even numbers from 0 to 19998
    }
    
    // Test searching for different targets
    SearchAlgorithms::measurePerformance(largeArray, 5000);    // Target near middle
    SearchAlgorithms::measurePerformance(largeArray, 100);     // Target near beginning
    SearchAlgorithms::measurePerformance(largeArray, 19998);   // Target at end
    SearchAlgorithms::measurePerformance(largeArray, 9999);    // Target not present (odd number)
    
    // When to use each search algorithm
    cout << "\\n=== WHEN TO USE EACH ALGORITHM ===" << endl;
    cout << "\\nUse Linear Search when:" << endl;
    cout << "  • Array is small" << endl;
    cout << "  • Array is unsorted" << endl;
    cout << "  • Searching infrequently" << endl;
    
    cout << "\\nUse Binary Search when:" << endl;
    cout << "  • Array is large" << endl;
    cout << "  • Array is sorted" << endl;
    cout << "  • Frequent searches are needed" << endl;
    cout << "  • You can afford to sort the array once" << endl;
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 10,
                title: "Heap & BST",
                topics: [
                    {
                        title: "Heap Data Structure",
                        content: "A heap is a complete binary tree that satisfies the heap property: max-heap (parent ≥ children) or min-heap (parent ≤ children). Heaps are commonly used to implement priority queues.",
                        code: `// Heap implementation in C++
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class MaxHeap {
private:
    vector<int> heap;
    
    // Helper functions
    int parent(int i) { return (i - 1) / 2; }
    int leftChild(int i) { return 2 * i + 1; }
    int rightChild(int i) { return 2 * i + 2; }
    
    // Heapify up (used after insertion)
    void heapifyUp(int i) {
        while(i > 0 && heap[parent(i)] < heap[i]) {
            swap(heap[i], heap[parent(i)]);
            i = parent(i);
        }
    }
    
    // Heapify down (used after extraction)
    void heapifyDown(int i) {
        int maxIndex = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if(left < heap.size() && heap[left] > heap[maxIndex]) {
            maxIndex = left;
        }
        
        if(right < heap.size() && heap[right] > heap[maxIndex]) {
            maxIndex = right;
        }
        
        if(i != maxIndex) {
            swap(heap[i], heap[maxIndex]);
            heapifyDown(maxIndex);
        }
    }
    
public:
    // Insert element into heap
    void insert(int value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
        cout << "Inserted " << value << " into heap." << endl;
    }
    
    // Extract maximum element
    int extractMax() {
        if(heap.empty()) {
            cout << "Heap is empty!" << endl;
            return -1;
        }
        
        int maxValue = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        
        if(!heap.empty()) {
            heapifyDown(0);
        }
        
        cout << "Extracted max value: " << maxValue << endl;
        return maxValue;
    }
    
    // Get maximum without removing
    int getMax() {
        if(heap.empty()) {
            cout << "Heap is empty!" << endl;
            return -1;
        }
        return heap[0];
    }
    
    // Get heap size
    int size() {
        return heap.size();
    }
    
    // Check if heap is empty
    bool isEmpty() {
        return heap.empty();
    }
    
    // Display heap as array
    void displayArray() {
        cout << "Heap array: ";
        for(int val : heap) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    // Display heap as tree
    void displayTree(int i = 0, int indent = 0) {
        if(i >= heap.size()) return;
        
        // Print right child first (so left appears on top in console)
        if(rightChild(i) < heap.size()) {
            displayTree(rightChild(i), indent + 4);
        }
        
        // Print current node
        cout << string(indent, ' ') << heap[i] << endl;
        
        // Print left child
        if(leftChild(i) < heap.size()) {
            displayTree(leftChild(i), indent + 4);
        }
    }
    
    // Build heap from array
    void buildHeap(vector<int>& arr) {
        heap = arr;
        
        // Start from last non-leaf node and heapify down
        for(int i = (heap.size() / 2) - 1; i >= 0; i--) {
            heapifyDown(i);
        }
        
        cout << "Built heap from array." << endl;
    }
    
    // Heap sort
    vector<int> heapSort() {
        vector<int> sorted;
        vector<int> tempHeap = heap;
        
        while(!heap.empty()) {
            sorted.push_back(getMax());
            extractMax();
        }
        
        // Restore original heap
        heap = tempHeap;
        return sorted;
    }
};

int main() {
    MaxHeap heap;
    
    cout << "=== MAX HEAP IMPLEMENTATION ===" << endl;
    
    // Insert elements
    heap.insert(10);
    heap.insert(20);
    heap.insert(15);
    heap.insert(30);
    heap.insert(5);
    heap.insert(25);
    
    cout << endl;
    
    // Display heap
    heap.displayArray();
    cout << "\\nHeap tree structure:" << endl;
    heap.displayTree();
    
    cout << "\\nMaximum element: " << heap.getMax() << endl;
    cout << "Heap size: " << heap.size() << endl;
    
    // Extract elements
    cout << "\\nExtracting elements in order:" << endl;
    while(!heap.isEmpty()) {
        heap.extractMax();
        heap.displayArray();
    }
    
    cout << "\\n=== BUILD HEAP FROM ARRAY ===" << endl;
    vector<int> arr = {3, 9, 2, 1, 4, 5, 7, 8, 6};
    
    cout << "Original array: ";
    for(int val : arr) cout << val << " ";
    cout << endl;
    
    heap.buildHeap(arr);
    heap.displayArray();
    cout << "\\nHeap tree structure:" << endl;
    heap.displayTree();
    
    cout << "\\n=== HEAP SORT ===" << endl;
    vector<int> sorted = heap.heapSort();
    cout << "Sorted array (ascending order): ";
    for(int val : sorted) cout << val << " ";
    cout << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Binary Search Tree (BST)",
                        content: "A Binary Search Tree is a binary tree where for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater. BST enables efficient search, insertion, and deletion operations.",
                        code: `// Binary Search Tree implementation in C++
#include <iostream>
#include <queue>
using namespace std;

class BSTNode {
public:
    int data;
    BSTNode* left;
    BSTNode* right;
    
    BSTNode(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

class BinarySearchTree {
private:
    BSTNode* root;
    
    // Helper function for insertion
    BSTNode* insertRecursive(BSTNode* node, int value) {
        if(node == nullptr) {
            return new BSTNode(value);
        }
        
        if(value < node->data) {
            node->left = insertRecursive(node->left, value);
        } else if(value > node->data) {
            node->right = insertRecursive(node->right, value);
        }
        
        return node;
    }
    
    // Helper function for search
    bool searchRecursive(BSTNode* node, int value) {
        if(node == nullptr) {
            return false;
        }
        
        if(node->data == value) {
            return true;
        }
        
        if(value < node->data) {
            return searchRecursive(node->left, value);
        } else {
            return searchRecursive(node->right, value);
        }
    }
    
    // Helper function for inorder traversal
    void inorderRecursive(BSTNode* node) {
        if(node == nullptr) return;
        
        inorderRecursive(node->left);
        cout << node->data << " ";
        inorderRecursive(node->right);
    }
    
    // Helper function for finding minimum value node
    BSTNode* findMinNode(BSTNode* node) {
        BSTNode* current = node;
        while(current && current->left != nullptr) {
            current = current->left;
        }
        return current;
    }
    
    // Helper function for deletion
    BSTNode* deleteRecursive(BSTNode* node, int value) {
        if(node == nullptr) {
            return node;
        }
        
        if(value < node->data) {
            node->left = deleteRecursive(node->left, value);
        } else if(value > node->data) {
            node->right = deleteRecursive(node->right, value);
        } else {
            // Node found, handle three cases
            
            // Case 1: Node with no children
            if(node->left == nullptr && node->right == nullptr) {
                delete node;
                return nullptr;
            }
            
            // Case 2: Node with one child
            else if(node->left == nullptr) {
                BSTNode* temp = node->right;
                delete node;
                return temp;
            } else if(node->right == nullptr) {
                BSTNode* temp = node->left;
                delete node;
                return temp;
            }
            
            // Case 3: Node with two children
            else {
                // Find inorder successor (smallest in right subtree)
                BSTNode* successor = findMinNode(node->right);
                
                // Copy successor's data to current node
                node->data = successor->data;
                
                // Delete the successor
                node->right = deleteRecursive(node->right, successor->data);
            }
        }
        
        return node;
    }
    
    // Helper function to calculate height
    int heightRecursive(BSTNode* node) {
        if(node == nullptr) {
            return 0;
        }
        
        int leftHeight = heightRecursive(node->left);
        int rightHeight = heightRecursive(node->right);
        
        return max(leftHeight, rightHeight) + 1;
    }
    
    // Helper function to count nodes
    int countNodesRecursive(BSTNode* node) {
        if(node == nullptr) {
            return 0;
        }
        
        return 1 + countNodesRecursive(node->left) + countNodesRecursive(node->right);
    }
    
public:
    BinarySearchTree() {
        root = nullptr;
    }
    
    // Public insert method
    void insert(int value) {
        root = insertRecursive(root, value);
        cout << "Inserted " << value << " into BST." << endl;
    }
    
    // Public search method
    bool search(int value) {
        return searchRecursive(root, value);
    }
    
    // Public inorder traversal
    void inorder() {
        cout << "Inorder Traversal (sorted order): ";
        inorderRecursive(root);
        cout << endl;
    }
    
    // Public delete method
    void remove(int value) {
        if(!search(value)) {
            cout << value << " not found in BST." << endl;
            return;
        }
        
        root = deleteRecursive(root, value);
        cout << "Deleted " << value << " from BST." << endl;
    }
    
    // Public height method
    int height() {
        return heightRecursive(root);
    }
    
    // Public count nodes method
    int countNodes() {
        return countNodesRecursive(root);
    }
    
    // Level order traversal
    void levelOrder() {
        if(root == nullptr) {
            cout << "Tree is empty." << endl;
            return;
        }
        
        queue<BSTNode*> q;
        q.push(root);
        
        cout << "Level Order Traversal: ";
        while(!q.empty()) {
            BSTNode* current = q.front();
            q.pop();
            
            cout << current->data << " ";
            
            if(current->left != nullptr) {
                q.push(current->left);
            }
            
            if(current->right != nullptr) {
                q.push(current->right);
            }
        }
        cout << endl;
    }
    
    // Find minimum value
    int findMin() {
        if(root == nullptr) {
            cout << "Tree is empty." << endl;
            return -1;
        }
        
        BSTNode* current = root;
        while(current->left != nullptr) {
            current = current->left;
        }
        return current->data;
    }
    
    // Find maximum value
    int findMax() {
        if(root == nullptr) {
            cout << "Tree is empty." << endl;
            return -1;
        }
        
        BSTNode* current = root;
        while(current->right != nullptr) {
            current = current->right;
        }
        return current->data;
    }
    
    // Check if tree is empty
    bool isEmpty() {
        return root == nullptr;
    }
    
    // Display tree structure
    void displayTree() {
        if(root == nullptr) {
            cout << "Tree is empty." << endl;
            return;
        }
        
        cout << "\\nBST Structure (level order with null indicators):" << endl;
        queue<BSTNode*> q;
        q.push(root);
        
        while(!q.empty()) {
            int levelSize = q.size();
            
            for(int i = 0; i < levelSize; i++) {
                BSTNode* current = q.front();
                q.pop();
                
                if(current == nullptr) {
                    cout << "null ";
                } else {
                    cout << current->data << " ";
                    q.push(current->left);
                    q.push(current->right);
                }
            }
            cout << endl;
        }
    }
};

int main() {
    BinarySearchTree bst;
    
    cout << "=== BINARY SEARCH TREE IMPLEMENTATION ===" << endl;
    
    // Insert elements
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    bst.insert(20);
    bst.insert(40);
    bst.insert(60);
    bst.insert(80);
    
    cout << endl;
    
    // Display tree
    bst.displayTree();
    
    // Traversals
    bst.inorder();
    bst.levelOrder();
    
    // Search for elements
    cout << "\\nSearch operations:" << endl;
    int searchValues[] = {40, 90, 20, 100};
    for(int val : searchValues) {
        cout << "Searching for " << val << ": " << (bst.search(val) ? "Found" : "Not found") << endl;
    }
    
    // Tree properties
    cout << "\\nTree properties:" << endl;
    cout << "Height: " << bst.height() << endl;
    cout << "Total nodes: " << bst.countNodes() << endl;
    cout << "Minimum value: " << bst.findMin() << endl;
    cout << "Maximum value: " << bst.findMax() << endl;
    
    // Delete operations
    cout << "\\nDelete operations:" << endl;
    bst.remove(20);  // Delete leaf node
    bst.inorder();
    
    bst.remove(30);  // Delete node with one child
    bst.inorder();
    
    bst.remove(50);  // Delete node with two children (root)
    bst.inorder();
    
    // Display final tree
    cout << "\\nFinal tree structure:" << endl;
    bst.displayTree();
    
    // Insert more elements
    cout << "\\nInserting more elements:" << endl;
    bst.insert(55);
    bst.insert(75);
    bst.insert(25);
    bst.insert(35);
    
    bst.inorder();
    bst.displayTree();
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 11,
                title: "Advanced Algorithms",
                topics: [
                    {
                        title: "Divide and Conquer (Merge Sort)",
                        content: "Divide and conquer breaks a problem into smaller subproblems, solves them recursively, and combines the results. Merge Sort is a classic example that divides the array in half, sorts each half, and merges them.",
                        code: `// Merge Sort implementation in C++
#include <iostream>
#include <vector>
#include <chrono>
using namespace std;
using namespace std::chrono;

class MergeSort {
public:
    // Merge two sorted subarrays
    static void merge(vector<int>& arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Create temporary arrays
        vector<int> leftArr(n1);
        vector<int> rightArr(n2);
        
        // Copy data to temporary arrays
        for(int i = 0; i < n1; i++) {
            leftArr[i] = arr[left + i];
        }
        for(int j = 0; j < n2; j++) {
            rightArr[j] = arr[mid + 1 + j];
        }
        
        // Merge the temporary arrays back into arr[left..right]
        int i = 0, j = 0, k = left;
        
        while(i < n1 && j < n2) {
            if(leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements of leftArr if any
        while(i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }
        
        // Copy remaining elements of rightArr if any
        while(j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }
    
    // Recursive merge sort
    static void mergeSort(vector<int>& arr, int left, int right) {
        if(left < right) {
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }
    
    // Wrapper function
    static void sort(vector<int>& arr) {
        if(arr.empty()) return;
        mergeSort(arr, 0, arr.size() - 1);
    }
    
    // Display array
    static void displayArray(const vector<int>& arr, string name) {
        cout << name << ": ";
        for(int num : arr) {
            cout << num << " ";
        }
        cout << endl;
    }
    
    // Demonstrate step-by-step merge sort
    static void demonstrateStepByStep(vector<int>& arr) {
        cout << "\\nMerge Sort Step-by-Step:" << endl;
        cout << "Initial array: ";
        displayArray(arr, "");
        
        vector<int> original = arr;
        int step = 1;
        
        // Create a recursive function to show steps
        function<void(vector<int>&, int, int, int&)> mergeSortWithSteps = 
        [&](vector<int>& arr, int left, int right, int& step) {
            if(left < right) {
                int mid = left + (right - left) / 2;
                
                cout << "\\nStep " << step++ << ": Divide" << endl;
                cout << "  Left subarray (indices " << left << "-" << mid << "): ";
                for(int i = left; i <= mid; i++) cout << arr[i] << " ";
                cout << endl;
                
                cout << "  Right subarray (indices " << (mid+1) << "-" << right << "): ";
                for(int i = mid+1; i <= right; i++) cout << arr[i] << " ";
                cout << endl;
                
                // Recursively sort both halves
                mergeSortWithSteps(arr, left, mid, step);
                mergeSortWithSteps(arr, mid + 1, right, step);
                
                // Merge the sorted halves
                cout << "\\nStep " << step++ << ": Merge" << endl;
                cout << "  Merging subarrays " << left << "-" << mid << " and " << (mid+1) << "-" << right << endl;
                
                // Create copies for display
                vector<int> leftCopy, rightCopy;
                for(int i = left; i <= mid; i++) leftCopy.push_back(arr[i]);
                for(int i = mid+1; i <= right; i++) rightCopy.push_back(arr[i]);
                
                cout << "  Left sorted: "; displayArray(leftCopy, "");
                cout << "  Right sorted: "; displayArray(rightCopy, "");
                
                // Perform merge
                merge(arr, left, mid, right);
                
                cout << "  Merged result (indices " << left << "-" << right << "): ";
                for(int i = left; i <= right; i++) cout << arr[i] << " ";
                cout << endl;
            }
        };
        
        int stepCounter = 1;
        mergeSortWithSteps(arr, 0, arr.size() - 1, stepCounter);
        
        cout << "\\nFinal sorted array: ";
        displayArray(arr, "");
        
        // Restore original array
        arr = original;
    }
    
    // Performance analysis
    static void analyzePerformance() {
        cout << "\\n=== MERGE SORT PERFORMANCE ANALYSIS ===" << endl;
        
        vector<int> sizes = {10, 100, 1000, 10000, 50000};
        
        for(int size : sizes) {
            // Generate random array
            vector<int> arr(size);
            for(int i = 0; i < size; i++) {
                arr[i] = rand() % 10000;
            }
            
            // Measure time
            auto start = high_resolution_clock::now();
            sort(arr);
            auto stop = high_resolution_clock::now();
            auto duration = duration_cast<microseconds>(stop - start);
            
            cout << "Size: " << size << " | Time: " << duration.count() << " microseconds" << endl;
        }
        
        cout << "\\nTime Complexity Analysis:" << endl;
        cout << "Best case: O(n log n)" << endl;
        cout << "Average case: O(n log n)" << endl;
        cout << "Worst case: O(n log n)" << endl;
        cout << "Space Complexity: O(n)" << endl;
    }
};

int main() {
    cout << "=== DIVIDE AND CONQUER: MERGE SORT ===" << endl;
    
    // Example 1: Simple array
    vector<int> arr1 = {38, 27, 43, 3, 9, 82, 10};
    cout << "\\nExample 1:" << endl;
    MergeSort::displayArray(arr1, "Original array");
    
    MergeSort::sort(arr1);
    MergeSort::displayArray(arr1, "Sorted array");
    
    // Example 2: Demonstrate step by step
    vector<int> arr2 = {12, 11, 13, 5, 6, 7};
    cout << "\\nExample 2: Step-by-Step Demonstration" << endl;
    MergeSort::demonstrateStepByStep(arr2);
    
    // Example 3: Performance analysis
    MergeSort::analyzePerformance();
    
    // Example 4: Already sorted array (best case)
    vector<int> arr3 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    cout << "\\nExample 3: Already Sorted Array" << endl;
    MergeSort::displayArray(arr3, "Original (already sorted)");
    
    auto start = high_resolution_clock::now();
    MergeSort::sort(arr3);
    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    
    MergeSort::displayArray(arr3, "After sorting");
    cout << "Time taken: " << duration.count() << " microseconds" << endl;
    
    // Example 5: Reverse sorted array (worst case for some algorithms, but merge sort handles it well)
    vector<int> arr4 = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout << "\\nExample 4: Reverse Sorted Array" << endl;
    MergeSort::displayArray(arr4, "Original (reverse sorted)");
    
    start = high_resolution_clock::now();
    MergeSort::sort(arr4);
    stop = high_resolution_clock::now();
    duration = duration_cast<microseconds>(stop - start);
    
    MergeSort::displayArray(arr4, "After sorting");
    cout << "Time taken: " << duration.count() << " microseconds" << endl;
    
    return 0;
}`
                    },
                    {
                        title: "Dynamic Programming",
                        content: "Dynamic Programming solves complex problems by breaking them down into simpler subproblems and storing their solutions to avoid redundant computations. It's useful for optimization problems with overlapping subproblems.",
                        code: `// Dynamic Programming examples in C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <chrono>
using namespace std;
using namespace std::chrono;

class DynamicProgramming {
public:
    // 1. Fibonacci Sequence
    
    // Recursive (inefficient - exponential time)
    static int fibonacciRecursive(int n) {
        if(n <= 1) return n;
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
    
    // DP with memoization (top-down)
    static int fibonacciMemoization(int n, vector<int>& memo) {
        if(n <= 1) return n;
        
        if(memo[n] != -1) return memo[n];
        
        memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo);
        return memo[n];
    }
    
    // DP with tabulation (bottom-up)
    static int fibonacciTabulation(int n) {
        if(n <= 1) return n;
        
        vector<int> dp(n+1);
        dp[0] = 0;
        dp[1] = 1;
        
        for(int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
    }
    
    // DP with space optimization
    static int fibonacciOptimized(int n) {
        if(n <= 1) return n;
        
        int prev2 = 0, prev1 = 1, current;
        
        for(int i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        
        return current;
    }
    
    // 2. 0/1 Knapsack Problem
    static int knapSack(int capacity, vector<int>& weights, vector<int>& values, int n) {
        // Create DP table
        vector<vector<int>> dp(n+1, vector<int>(capacity+1, 0));
        
        // Build table
        for(int i = 1; i <= n; i++) {
            for(int w = 1; w <= capacity; w++) {
                if(weights[i-1] <= w) {
                    // Max of including or excluding the item
                    dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]], dp[i-1][w]);
                } else {
                    // Can't include this item
                    dp[i][w] = dp[i-1][w];
                }
            }
        }
        
        return dp[n][capacity];
    }
    
    // 3. Longest Common Subsequence (LCS)
    static string longestCommonSubsequence(string text1, string text2) {
        int m = text1.length();
        int n = text2.length();
        
        // Create DP table
        vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
        
        // Build table
        for(int i = 1; i <= m; i++) {
            for(int j = 1; j <= n; j++) {
                if(text1[i-1] == text2[j-1]) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        // Reconstruct LCS
        string lcs = "";
        int i = m, j = n;
        
        while(i > 0 && j > 0) {
            if(text1[i-1] == text2[j-1]) {
                lcs = text1[i-1] + lcs;
                i--;
                j--;
            } else if(dp[i-1][j] > dp[i][j-1]) {
                i--;
            } else {
                j--;
            }
        }
        
        return lcs;
    }
    
    // 4. Coin Change Problem (minimum coins)
    static int coinChange(vector<int>& coins, int amount) {
        // DP array: dp[i] = minimum coins to make amount i
        vector<int> dp(amount + 1, amount + 1); // Initialize with a large value
        dp[0] = 0; // Base case: 0 coins needed for amount 0
        
        // Build DP table
        for(int i = 1; i <= amount; i++) {
            for(int coin : coins) {
                if(coin <= i) {
                    dp[i] = min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    // Display performance comparison
    static void compareFibonacciMethods() {
        cout << "\\n=== FIBONACCI PERFORMANCE COMPARISON ===" << endl;
        
        int n = 40; // Large enough to show difference
        
        // Method 1: Recursive
        cout << "\\n1. Recursive (inefficient):" << endl;
        auto start = high_resolution_clock::now();
        int result1 = fibonacciRecursive(n);
        auto stop = high_resolution_clock::now();
        auto duration1 = duration_cast<milliseconds>(stop - start);
        cout << "F(" << n << ") = " << result1 << endl;
        cout << "Time: " << duration1.count() << " milliseconds" << endl;
        
        // Method 2: Memoization
        cout << "\\n2. DP with Memoization:" << endl;
        vector<int> memo(n+1, -1);
        start = high_resolution_clock::now();
        int result2 = fibonacciMemoization(n, memo);
        stop = high_resolution_clock::now();
        auto duration2 = duration_cast<microseconds>(stop - start);
        cout << "F(" << n << ") = " << result2 << endl;
        cout << "Time: " << duration2.count() << " microseconds" << endl;
        
        // Method 3: Tabulation
        cout << "\\n3. DP with Tabulation:" << endl;
        start = high_resolution_clock::now();
        int result3 = fibonacciTabulation(n);
        stop = high_resolution_clock::now();
        auto duration3 = duration_cast<microseconds>(stop - start);
        cout << "F(" << n << ") = " << result3 << endl;
        cout << "Time: " << duration3.count() << " microseconds" << endl;
        
        // Method 4: Optimized
        cout << "\\n4. DP with Space Optimization:" << endl;
        start = high_resolution_clock::now();
        int result4 = fibonacciOptimized(n);
        stop = high_resolution_clock::now();
        auto duration4 = duration_cast<microseconds>(stop - start);
        cout << "F(" << n << ") = " << result4 << endl;
        cout << "Time: " << duration4.count() << " microseconds" << endl;
        
        cout << "\\nPerformance Improvement:" << endl;
        cout << "Memoization is " << duration1.count() * 1000.0 / duration2.count() << " times faster than recursive" << endl;
    }
    
    // Demonstrate Knapsack problem
    static void demonstrateKnapsack() {
        cout << "\\n=== 0/1 KNAPSACK PROBLEM ===" << endl;
        
        vector<int> values = {60, 100, 120};
        vector<int> weights = {10, 20, 30};
        int capacity = 50;
        int n = values.size();
        
        cout << "Items:" << endl;
        for(int i = 0; i < n; i++) {
            cout << "Item " << i+1 << ": Value = " << values[i] << ", Weight = " << weights[i] << endl;
        }
        cout << "Knapsack capacity: " << capacity << endl;
        
        int maxValue = knapSack(capacity, weights, values, n);
        cout << "Maximum value that can be obtained: " << maxValue << endl;
    }
    
    // Demonstrate LCS
    static void demonstrateLCS() {
        cout << "\\n=== LONGEST COMMON SUBSEQUENCE ===" << endl;
        
        string text1 = "AGGTAB";
        string text2 = "GXTXAYB";
        
        cout << "String 1: " << text1 << endl;
        cout << "String 2: " << text2 << endl;
        
        string lcs = longestCommonSubsequence(text1, text2);
        cout << "Longest Common Subsequence: " << lcs << endl;
        cout << "Length of LCS: " << lcs.length() << endl;
    }
    
    // Demonstrate Coin Change
    static void demonstrateCoinChange() {
        cout << "\\n=== COIN CHANGE PROBLEM ===" << endl;
        
        vector<int> coins = {1, 2, 5};
        int amount = 11;
        
        cout << "Coins available: ";
        for(int coin : coins) cout << coin << " ";
        cout << endl;
        cout << "Amount to make: " << amount << endl;
        
        int minCoins = coinChange(coins, amount);
        cout << "Minimum coins needed: " << minCoins << endl;
        
        // Another example
        cout << "\\nAnother example:" << endl;
        vector<int> coins2 = {2};
        int amount2 = 3;
        
        cout << "Coins available: ";
        for(int coin : coins2) cout << coin << " ";
        cout << endl;
        cout << "Amount to make: " << amount2 << endl;
        
        minCoins = coinChange(coins2, amount2);
        cout << "Minimum coins needed: " << (minCoins == -1 ? "Not possible" : to_string(minCoins)) << endl;
    }
};

int main() {
    cout << "=== DYNAMIC PROGRAMMING EXAMPLES ===" << endl;
    
    // Compare Fibonacci methods
    DynamicProgramming::compareFibonacciMethods();
    
    // Demonstrate Knapsack problem
    DynamicProgramming::demonstrateKnapsack();
    
    // Demonstrate LCS
    DynamicProgramming::demonstrateLCS();
    
    // Demonstrate Coin Change
    DynamicProgramming::demonstrateCoinChange();
    
    // Additional DP Concepts
    cout << "\\n=== DYNAMIC PROGRAMMING KEY CONCEPTS ===" << endl;
    cout << "\\n1. Optimal Substructure:" << endl;
    cout << "   Optimal solution can be constructed from optimal solutions of subproblems." << endl;
    
    cout << "\\n2. Overlapping Subproblems:" << endl;
    cout << "   Problem can be broken down into subproblems which are reused several times." << endl;
    
    cout << "\\n3. Memoization vs Tabulation:" << endl;
    cout << "   • Memoization (Top-down): Recursive with caching" << endl;
    cout << "   • Tabulation (Bottom-up): Iterative table filling" << endl;
    
    cout << "\\n4. When to Use DP:" << endl;
    cout << "   • Optimization problems" << endl;
    cout << "   • Counting problems" << endl;
    cout << "   • Problems with optimal substructure and overlapping subproblems" << endl;
    
    return 0;
}`
                    }
                ]
            },
            {
                id: 12,
                title: "Huffman Algorithm",
                topics: [
                    {
                        title: "Huffman Coding Algorithm",
                        content: "Huffman coding is a lossless data compression algorithm that assigns variable-length codes to characters based on their frequencies. More frequent characters get shorter codes. It uses a priority queue (min-heap) to build an optimal prefix code tree.",
                        code: `// Huffman Coding implementation in C++
#include <iostream>
#include <queue>
#include <vector>
#include <map>
#include <string>
#include <bitset>
using namespace std;

// Huffman Tree Node
struct HuffmanNode {
    char character;
    int frequency;
    HuffmanNode* left;
    HuffmanNode* right;
    
    HuffmanNode(char ch, int freq) {
        character = ch;
        frequency = freq;
        left = nullptr;
        right = nullptr;
    }
    
    // For internal nodes (no character)
    HuffmanNode(int freq) {
        character = '\\0';
        frequency = freq;
        left = nullptr;
        right = nullptr;
    }
};

// Comparison object for priority queue
struct CompareNodes {
    bool operator()(HuffmanNode* a, HuffmanNode* b) {
        return a->frequency > b->frequency; // Min-heap based on frequency
    }
};

class HuffmanCoding {
private:
    HuffmanNode* root;
    map<char, string> huffmanCodes;
    map<string, char> reverseCodes;
    
    // Build frequency map from input string
    map<char, int> buildFrequencyMap(const string& text) {
        map<char, int> freqMap;
        for(char ch : text) {
            freqMap[ch]++;
        }
        return freqMap;
    }
    
    // Build Huffman Tree
    HuffmanNode* buildHuffmanTree(const map<char, int>& freqMap) {
        // Create a priority queue (min-heap)
        priority_queue<HuffmanNode*, vector<HuffmanNode*>, CompareNodes> minHeap;
        
        // Create leaf nodes and add to min-heap
        for(auto& pair : freqMap) {
            minHeap.push(new HuffmanNode(pair.first, pair.second));
        }
        
        // Build the tree
        while(minHeap.size() > 1) {
            // Extract two nodes with minimum frequency
            HuffmanNode* left = minHeap.top(); minHeap.pop();
            HuffmanNode* right = minHeap.top(); minHeap.pop();
            
            // Create internal node with sum of frequencies
            int sumFreq = left->frequency + right->frequency;
            HuffmanNode* internalNode = new HuffmanNode(sumFreq);
            internalNode->left = left;
            internalNode->right = right;
            
            // Add internal node back to heap
            minHeap.push(internalNode);
        }
        
        // The remaining node is the root of Huffman Tree
        return minHeap.top();
    }
    
    // Generate Huffman codes from the tree
    void generateCodes(HuffmanNode* node, string code) {
        if(node == nullptr) return;
        
        // If leaf node, store the code
        if(node->character != '\\0') {
            huffmanCodes[node->character] = code;
            reverseCodes[code] = node->character;
        }
        
        // Traverse left (add '0') and right (add '1')
        generateCodes(node->left, code + "0");
        generateCodes(node->right, code + "1");
    }
    
    // Helper function to delete tree (prevent memory leak)
    void deleteTree(HuffmanNode* node) {
        if(node == nullptr) return;
        
        deleteTree(node->left);
        deleteTree(node->right);
        delete node;
    }
    
public:
    HuffmanCoding() : root(nullptr) {}
    
    ~HuffmanCoding() {
        deleteTree(root);
    }
    
    // Encode the input text
    string encode(const string& text) {
        if(text.empty()) return "";
        
        // Build frequency map
        map<char, int> freqMap = buildFrequencyMap(text);
        
        // Build Huffman Tree
        root = buildHuffmanTree(freqMap);
        
        // Generate Huffman codes
        huffmanCodes.clear();
        reverseCodes.clear();
        generateCodes(root, "");
        
        // Encode the text
        string encodedText = "";
        for(char ch : text) {
            encodedText += huffmanCodes[ch];
        }
        
        return encodedText;
    }
    
    // Decode the encoded text
    string decode(const string& encodedText) {
        if(encodedText.empty() || root == nullptr) return "";
        
        string decodedText = "";
        HuffmanNode* current = root;
        
        for(char bit : encodedText) {
            // Traverse the tree based on bits
            if(bit == '0') {
                current = current->left;
            } else {
                current = current->right;
            }
            
            // If leaf node, add character and reset to root
            if(current->character != '\\0') {
                decodedText += current->character;
                current = root;
            }
        }
        
        return decodedText;
    }
    
    // Display frequency table
    void displayFrequencyTable(const string& text) {
        map<char, int> freqMap = buildFrequencyMap(text);
        
        cout << "Character Frequencies:" << endl;
        cout << "----------------------" << endl;
        for(auto& pair : freqMap) {
            cout << "'" << pair.first << "': " << pair.second << " times" << endl;
        }
        cout << endl;
    }
    
    // Display Huffman codes
    void displayHuffmanCodes() {
        if(huffmanCodes.empty()) {
            cout << "No codes generated yet. Encode text first." << endl;
            return;
        }
        
        cout << "Huffman Codes:" << endl;
        cout << "--------------" << endl;
        for(auto& pair : huffmanCodes) {
            cout << "'" << pair.first << "': " << pair.second << endl;
        }
        cout << endl;
    }
    
    // Display Huffman tree (simplified)
    void displayTree(HuffmanNode* node, string prefix = "", bool isLeft = true) {
        if(node == nullptr) return;
        
        cout << prefix;
        cout << (isLeft ? "├──" : "└──");
        
        if(node->character != '\\0') {
            cout << "'" << node->character << "' (" << node->frequency << ")" << endl;
        } else {
            cout << "Internal (" << node->frequency << ")" << endl;
        }
        
        // Process children
        displayTree(node->left, prefix + (isLeft ? "│   " : "    "), true);
        displayTree(node->right, prefix + (isLeft ? "│   " : "    "), false);
    }
    
    // Display tree structure
    void displayTreeStructure() {
        if(root == nullptr) {
            cout << "Tree not built yet. Encode text first." << endl;
            return;
        }
        
        cout << "Huffman Tree Structure:" << endl;
        cout << "-----------------------" << endl;
        displayTree(root);
        cout << endl;
    }
    
    // Calculate compression ratio
    void calculateCompressionStats(const string& originalText, const string& encodedText) {
        if(originalText.empty() || encodedText.empty()) return;
        
        int originalBits = originalText.length() * 8; // Assuming 8-bit ASCII
        int encodedBits = encodedText.length();
        
        double compressionRatio = (1.0 - (double)encodedBits / originalBits) * 100;
        double bitsPerChar = (double)encodedBits / originalText.length();
        
        cout << "Compression Statistics:" << endl;
        cout << "----------------------" << endl;
        cout << "Original text size: " << originalText.length() << " characters" << endl;
        cout << "Original bits (ASCII): " << originalBits << " bits" << endl;
        cout << "Encoded bits: " << encodedBits << " bits" << endl;
        cout << "Compression ratio: " << compressionRatio << "%" << endl;
        cout << "Average bits per character: " << bitsPerChar << " bits" << endl;
        cout << endl;
    }
    
    // Get root for external use
    HuffmanNode* getRoot() { return root; }
};

int main() {
    cout << "=== HUFFMAN CODING ALGORITHM ===" << endl;
    
    HuffmanCoding huffman;
    string text;
    
    // Example 1: Simple text
    cout << "\\nExample 1: Simple Text" << endl;
    text = "ABBCCCDDDDEEEEE";
    cout << "Original text: " << text << endl;
    
    huffman.displayFrequencyTable(text);
    
    string encoded = huffman.encode(text);
    cout << "Encoded text: " << encoded << endl;
    
    huffman.displayHuffmanCodes();
    huffman.displayTreeStructure();
    
    string decoded = huffman.decode(encoded);
    cout << "Decoded text: " << decoded << endl;
    
    huffman.calculateCompressionStats(text, encoded);
    
    // Example 2: More complex text
    cout << "\\nExample 2: More Complex Text" << endl;
    text = "this is an example for huffman encoding";
    cout << "Original text: " << text << endl;
    
    encoded = huffman.encode(text);
    cout << "Encoded text: " << encoded << endl;
    
    huffman.displayHuffmanCodes();
    
    decoded = huffman.decode(encoded);
    cout << "Decoded text: " << decoded << endl;
    
    huffman.calculateCompressionStats(text, encoded);
    
    // Example 3: Verify encoding/decoding
    cout << "\\nExample 3: Verification Test" << endl;
    text = "hello world!";
    cout << "Original text: " << text << endl;
    
    encoded = huffman.encode(text);
    cout << "Encoded text: " << encoded << endl;
    
    decoded = huffman.decode(encoded);
    cout << "Decoded text: " << decoded << endl;
    
    if(text == decoded) {
        cout << "✓ Encoding and decoding successful!" << endl;
    } else {
        cout << "✗ Encoding/decoding error!" << endl;
    }
    
    // Example 4: Show how Huffman coding works step by step
    cout << "\\n=== HUFFMAN CODING STEP-BY-STEP EXPLANATION ===" << endl;
    cout << "\\n1. Calculate frequency of each character in the text." << endl;
    cout << "2. Create a leaf node for each character and add to min-heap." << endl;
    cout << "3. While heap has more than one node:" << endl;
    cout << "   a. Extract two nodes with minimum frequency." << endl;
    cout << "   b. Create internal node with sum of frequencies." << endl;
    cout << "   c. Add internal node back to heap." << endl;
    cout << "4. Remaining node is the root of Huffman Tree." << endl;
    cout << "5. Assign '0' to left edges and '1' to right edges." << endl;
    cout << "6. Generate codes by traversing from root to leaves." << endl;
    cout << "7. More frequent characters get shorter codes." << endl;
    cout << "8. No code is prefix of another (prefix property)." << endl;
    
    // Example 5: Binary representation
    cout << "\\n=== BINARY REPRESENTATION COMPARISON ===" << endl;
    text = "ABCD";
    cout << "Text: " << text << endl;
    
    cout << "\\nStandard ASCII (8 bits per character):" << endl;
    for(char ch : text) {
        bitset<8> binary(ch);
        cout << ch << ": " << binary << " (" << binary.to_string() << ")" << endl;
    }
    cout << "Total bits: " << text.length() * 8 << " bits" << endl;
    
    encoded = huffman.encode(text);
    cout << "\\nHuffman Coding:" << endl;
    huffman.displayHuffmanCodes();
    cout << "Encoded text: " << encoded << endl;
    cout << "Total bits: " << encoded.length() << " bits" << endl;
    
    return 0;
}`
                    }
                ]
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            const moduleNav = document.getElementById('moduleNav');
            const contentArea = document.getElementById('contentArea');
            
            // Create module navigation buttons
            modules.forEach(module => {
                const button = document.createElement('button');
                button.className = 'module-btn';
                button.textContent = `Module ${module.id}: ${module.title}`;
                button.dataset.moduleId = module.id;
                
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    document.querySelectorAll('.module-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Show selected module
                    showModule(module.id);
                });
                
                moduleNav.appendChild(button);
            });
            
            // Create module content sections
            modules.forEach(module => {
                const moduleSection = document.createElement('div');
                moduleSection.className = 'module';
                moduleSection.id = `module-${module.id}`;
                
                // Module header
                const moduleHeader = document.createElement('div');
                moduleHeader.className = 'module-header';
                moduleHeader.innerHTML = `
                    <h2>${module.title}</h2>
                    <div class="module-number">Module ${module.id}</div>
                `;
                
                // Module content
                const moduleContent = document.createElement('div');
                moduleContent.className = 'module-content';
                
                // Add topics
                module.topics.forEach(topic => {
                    const topicDiv = document.createElement('div');
                    topicDiv.className = 'topic';
                    
                    topicDiv.innerHTML = `
                        <h3><i class="fas fa-code"></i> ${topic.title}</h3>
                        <p>${topic.content}</p>
                        ${topic.code ? `
                        <div class="code-container">
                            <div class="code-header">
                                <span>C++ Implementation</span>
                                <button class="copy-btn">Copy Code</button>
                            </div>
                            <pre><code>${escapeHtml(topic.code)}</code></pre>
                        </div>
                        ` : ''}
                    `;
                    
                    // Add visualization for certain modules
                    if (module.id === 2) {
                        topicDiv.appendChild(createArrayVisualization());
                    } else if (module.id === 4) {
                        topicDiv.appendChild(createLinkedListVisualization());
                    }
                    
                    moduleContent.appendChild(topicDiv);
                });
                
                moduleSection.appendChild(moduleHeader);
                moduleSection.appendChild(moduleContent);
                contentArea.appendChild(moduleSection);
            });
            
            // Show first module by default
            document.querySelector('.module-btn').classList.add('active');
            showModule(1);
            
            // Add copy functionality to code blocks
            document.querySelectorAll('.copy-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const code = this.parentElement.nextElementSibling.textContent;
                    navigator.clipboard.writeText(code).then(() => {
                        const originalText = this.textContent;
                        this.textContent = 'Copied!';
                        setTimeout(() => {
                            this.textContent = originalText;
                        }, 2000);
                    });
                });
            });
        });
        
        // Show selected module
        function showModule(moduleId) {
            // Hide all modules
            document.querySelectorAll('.module').forEach(module => {
                module.classList.remove('active');
            });
            
            // Show selected module
            const selectedModule = document.getElementById(`module-${moduleId}`);
            if (selectedModule) {
                selectedModule.classList.add('active');
            }
        }
        
        // Escape HTML to prevent XSS
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        // Create array visualization
        function createArrayVisualization() {
            const container = document.createElement('div');
            container.className = 'visualization';
            
            container.innerHTML = `
                <h4>Array Memory Visualization</h4>
                <div class="array-visual" id="arrayVisual">
                    <!-- Array cells will be generated by JavaScript -->
                </div>
                <div class="operation-buttons">
                    <button class="operation-btn" onclick="updateArray('traverse')">Traverse</button>
                    <button class="operation-btn" onclick="updateArray('insert')">Insert</button>
                    <button class="operation-btn" onclick="updateArray('delete')">Delete</button>
                    <button class="operation-btn" onclick="updateArray('search')">Search</button>
                </div>
                <p id="arrayStatus">Click buttons to visualize array operations</p>
            `;
            
            // Generate initial array cells
            setTimeout(() => {
                generateArrayCells();
            }, 100);
            
            return container;
        }
        
        // Generate array cells for visualization
        function generateArrayCells() {
            const arrayVisual = document.getElementById('arrayVisual');
            if (!arrayVisual) return;
            
            arrayVisual.innerHTML = '';
            
            // Create 8 array cells with random values
            for (let i = 0; i < 8; i++) {
                const cell = document.createElement('div');
                cell.className = 'array-cell';
                cell.innerHTML = `
                    <div class="array-index">[${i}]</div>
                    <div class="array-value">${Math.floor(Math.random() * 100)}</div>
                `;
                cell.id = `arrayCell${i}`;
                arrayVisual.appendChild(cell);
            }
        }
        
        // Array operations for visualization
        window.updateArray = function(operation) {
            const cells = document.querySelectorAll('.array-cell');
            const status = document.getElementById('arrayStatus');
            
            // Reset all cells
            cells.forEach(cell => {
                cell.style.backgroundColor = '';
                cell.style.transform = '';
            });
            
            switch(operation) {
                case 'traverse':
                    status.textContent = 'Traversing array: visiting each element sequentially';
                    // Highlight cells one by one
                    cells.forEach((cell, index) => {
                        setTimeout(() => {
                            cell.style.backgroundColor = '#3498db';
                            cell.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                cell.style.backgroundColor = '';
                                cell.style.transform = '';
                            }, 500);
                        }, index * 300);
                    });
                    break;
                    
                case 'insert':
                    status.textContent = 'Inserting element: shifting elements to make space';
                    // Simulate insertion at index 3
                    for (let i = cells.length - 1; i > 3; i--) {
                        setTimeout(() => {
                            cells[i].style.backgroundColor = '#e74c3c';
                            cells[i].style.transform = 'translateX(20px)';
                        }, (cells.length - 1 - i) * 200);
                    }
                    setTimeout(() => {
                        cells[3].style.backgroundColor = '#27ae60';
                        cells[3].style.transform = 'scale(1.2)';
                        status.textContent = 'Element inserted at index 3 (highlighted in green)';
                    }, (cells.length - 4) * 200);
                    break;
                    
                case 'delete':
                    status.textContent = 'Deleting element at index 2: shifting elements to fill gap';
                    // Simulate deletion at index 2
                    cells[2].style.backgroundColor = '#e74c3c';
                    cells[2].style.transform = 'scale(0.8)';
                    
                    for (let i = 3; i < cells.length; i++) {
                        setTimeout(() => {
                            cells[i].style.backgroundColor = '#3498db';
                            cells[i].style.transform = 'translateX(-20px)';
                        }, (i - 2) * 200);
                    }
                    break;
                    
                case 'search':
                    status.textContent = 'Searching for value: checking each element';
                    const targetValue = cells[4].querySelector('.array-value').textContent;
                    status.textContent = `Searching for value ${targetValue}...`;
                    
                    // Linear search simulation
                    let found = false;
                    cells.forEach((cell, index) => {
                        setTimeout(() => {
                            cell.style.backgroundColor = '#3498db';
                            
                            if (cell.querySelector('.array-value').textContent === targetValue && !found) {
                                cell.style.backgroundColor = '#27ae60';
                                cell.style.transform = 'scale(1.2)';
                                status.textContent = `Value ${targetValue} found at index ${index}!`;
                                found = true;
                            }
                            
                            setTimeout(() => {
                                if (cell.style.backgroundColor !== '#27ae60') {
                                    cell.style.backgroundColor = '';
                                    cell.style.transform = '';
                                }
                            }, 300);
                        }, index * 400);
                    });
                    break;
            }
        };
        
        // Create linked list visualization
        function createLinkedListVisualization() {
            const container = document.createElement('div');
            container.className = 'visualization';
            
            container.innerHTML = `
                <h4>Linked List Visualization</h4>
                <div class="linked-list-visual" id="linkedListVisual">
                    <!-- Linked list nodes will be generated by JavaScript -->
                </div>
                <div class="operation-buttons">
                    <button class="operation-btn" onclick="updateLinkedList('traverse')">Traverse</button>
                    <button class="operation-btn" onclick="updateLinkedList('insert')">Insert</button>
                    <button class="operation-btn" onclick="updateLinkedList('delete')">Delete</button>
                    <button class="operation-btn" onclick="updateLinkedList('search')">Search</button>
                </div>
                <p id="linkedListStatus">Click buttons to visualize linked list operations</p>
            `;
            
            // Generate initial linked list nodes
            setTimeout(() => {
                generateLinkedListNodes();
            }, 100);
            
            return container;
        }
        
        // Generate linked list nodes for visualization
        function generateLinkedListNodes() {
            const listVisual = document.getElementById('linkedListVisual');
            if (!listVisual) return;
            
            listVisual.innerHTML = '';
            
            // Create 4 linked list nodes
            const values = [10, 20, 30, 40];
            
            values.forEach((value, index) => {
                const node = document.createElement('div');
                node.className = 'node';
                node.innerHTML = `
                    <div class="data">${value}</div>
                    <div class="next-pointer"></div>
                `;
                node.id = `listNode${index}`;
                listVisual.appendChild(node);
                
                // Add null indicator for last node
                if (index === values.length - 1) {
                    const nullIndicator = document.createElement('div');
                    nullIndicator.className = 'null-pointer';
                    nullIndicator.textContent = 'NULL';
                    listVisual.appendChild(nullIndicator);
                }
            });
        }
        
        // Linked list operations for visualization
        window.updateLinkedList = function(operation) {
            const nodes = document.querySelectorAll('.node');
            const status = document.getElementById('linkedListStatus');
            
            // Reset all nodes
            nodes.forEach(node => {
                node.style.backgroundColor = '';
                node.style.transform = '';
                node.querySelector('.data').style.backgroundColor = '';
            });
            
            switch(operation) {
                case 'traverse':
                    status.textContent = 'Traversing linked list: following pointers from head to tail';
                    // Highlight nodes one by one
                    nodes.forEach((node, index) => {
                        setTimeout(() => {
                            node.style.backgroundColor = '#3498db';
                            node.style.transform = 'scale(1.05)';
                            setTimeout(() => {
                                node.style.backgroundColor = '';
                                node.style.transform = '';
                            }, 500);
                        }, index * 500);
                    });
                    break;
                    
                case 'insert':
                    status.textContent = 'Inserting new node: updating pointers without shifting elements';
                    // Simulate insertion after second node
                    setTimeout(() => {
                        nodes[1].querySelector('.data').style.backgroundColor = '#e74c3c';
                        status.textContent = 'Node to insert after is highlighted';
                    }, 500);
                    
                    setTimeout(() => {
                        const newNode = document.createElement('div');
                        newNode.className = 'node';
                        newNode.innerHTML = `
                            <div class="data" style="background-color: #27ae60;">25</div>
                            <div class="next-pointer"></div>
                        `;
                        newNode.style.backgroundColor = '#f1c40f';
                        newNode.style.transform = 'scale(1.1)';
                        
                        // Insert after nodes[1]
                        if (nodes[1].nextSibling) {
                            listVisual.insertBefore(newNode, nodes[1].nextSibling);
                        }
                        
                        status.textContent = 'New node inserted (highlighted in yellow). Only pointers were updated.';
                    }, 1500);
                    break;
                    
                case 'delete':
                    status.textContent = 'Deleting node: updating pointers to bypass node';
                    // Simulate deletion of second node
                    setTimeout(() => {
                        nodes[1].style.backgroundColor = '#e74c3c';
                        nodes[1].style.transform = 'scale(0.9)';
                        status.textContent = 'Node to delete is highlighted';
                    }, 500);
                    
                    setTimeout(() => {
                        nodes[1].style.display = 'none';
                        status.textContent = 'Node deleted. Previous node now points to next node.';
                    }, 1500);
                    break;
                    
                case 'search':
                    status.textContent = 'Searching for value: traversing list until value is found';
                    const targetValue = '30'; // Value in third node
                    
                    // Linear search simulation
                    let found = false;
                    nodes.forEach((node, index) => {
                        setTimeout(() => {
                            node.style.backgroundColor = '#3498db';
                            
                            if (node.querySelector('.data').textContent === targetValue && !found) {
                                node.querySelector('.data').style.backgroundColor = '#27ae60';
                                node.style.transform = 'scale(1.1)';
                                status.textContent = `Value ${targetValue} found at node ${index + 1}!`;
                                found = true;
                            }
                            
                            setTimeout(() => {
                                if (node.querySelector('.data').style.backgroundColor !== '#27ae60') {
                                    node.style.backgroundColor = '';
                                    node.style.transform = '';
                                }
                            }, 300);
                        }, index * 600);
                    });
                    break;
            }
        };