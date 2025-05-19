#include<iostream>
int main(){
    int digit =0;
    int num =0;
    int reversed=0;
    std::cout<<"enter the number to be reverses";
    std::cin>>num;
  while(num>0){
    digit = num%10;
    num = num /10;
    reversed = reversed * 10 + digit;
    }
    std::cout<<reversed;
}