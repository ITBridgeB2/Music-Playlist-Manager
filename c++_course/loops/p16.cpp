#include<iostream>
int main(){
    int n;
    int prod =1;
    std::cout<<"enter the value of n : ";
    std::cin>>n;
    for(int i=n;i>=1;i--){
    prod *=i;
    std::cout<<i;
    if(i!=1){
    std::cout<<"*";
    }
    }
    std::cout<<"="<<prod;
    return 0;
}