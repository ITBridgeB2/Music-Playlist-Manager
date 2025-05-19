#include<iostream>
int sumOfDigits(){
    int num;
    std::cout<<"enter the value of num : ";
    std::cin>>num;
    int sum =0;
   while(num>0){
    int digit = num%10;
    num = num/10;
     sum += digit;
     
   }
   std::cout<<sum;

    }

int main(){
sumOfDigits();
return 0;
}