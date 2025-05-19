#include<iostream>
int main(){
    int num  ;
    int reversed =0;
    int digit =0;
    std::cout<<"enter the number";
    std::cin>>num;
    digit = num%10;
    num = num/10;
    reversed = reversed*10+digit;
    std::cout<<num<<"\n";
    std::cout<<digit<<"\n";
    std::cout<<reversed<<"\n";
    return 0;
}