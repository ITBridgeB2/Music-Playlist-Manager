#include<iostream>
int main(){
    int num;
    std::cout<<"enter the value of num : "<<"\n";
    std::cin>>num;
    for (int i=0;i<=num;i+=2){
        std::cout<<i<<"\n";
    }
    return 0;
}
