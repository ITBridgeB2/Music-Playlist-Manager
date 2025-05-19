#include<iostream>
int printHello(){
    //function defintion
    std::cout<<"hello\n";
    // value that is to be returned
    return 3;

}
int main(){
    //method 1 function call/invoke
 int val = printHello();
 std::cout<<val<<"\n";
 //method 2 function call/invoke
 std::cout<<printHello();
}