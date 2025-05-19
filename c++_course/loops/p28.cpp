#include<iostream>
int main(){
    int n = 4;

    // Upper half (including middle line)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            std::cout << " ";
        }
        for (int k = 0; k < 2 * i + 1; k++) {
            std::cout << "*";
        }
        std::cout << "\n";
    }

    // Lower half (excluding middle line)
    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j < n - i - 1; j++) {
            std::cout << " ";
        }
        for (int k = 0; k < 2 * i + 1; k++) {
            std::cout << "*";
        }
        std::cout << "\n";
    }

    return 0;
}
