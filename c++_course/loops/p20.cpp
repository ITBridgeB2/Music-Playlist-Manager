#include<iostream>
int main(){
    int num;
    int reversed = 0;
    int digit =0;
    std::cout<<"enter the number : ";
    std::cin>>num;
    int temp = num;
    while(num>0){
        digit = num%10;
        num = num/10;
        reversed = reversed*10+digit;
        
    }
    if(temp==reversed){
        std::cout<<"the entered number is a pallindrome"<<"\n";

    }
    else{
        std::cout<<"the entered number is not a pallindrome"<<"\n";
    }
    return 0;
}