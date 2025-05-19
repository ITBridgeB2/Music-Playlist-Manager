#include<iostream>
int main(){
    int a;
    std::cout<<"enter the number to be checked"<<"\n";
    std::cin>>a;
    if(a % 2==0){
        std::cout<<"the number is even"<<"\n";

    }
    else{
        std::cout<<"the given number is odd"<<"\n";
    }
    return 0;
}