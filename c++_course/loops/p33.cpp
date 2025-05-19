#include<iostream>
int main(){
    int num;
    int digit=0;
    int reversed =0;
    
    std::cout<<"enter the number : ";
    std::cin>>num;
    int temp = num;
    while(num>0){
         int digit = num %10;
         num = num/10;
         reversed= reversed*10+digit;

    }
    std::cout<<reversed<<"\n";
    if(temp==reversed){
        std::cout<<"the number is a pallindrome";
    }
    else{
        std::cout<<"the number is not a pallindrome";
    }

    return 0;
}