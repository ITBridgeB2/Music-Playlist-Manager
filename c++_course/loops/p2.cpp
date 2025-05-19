#include<iostream>
int main(){
    int a;
    int sum =0;
    std::cout<<"enter the value of a"<<"\n";
    std::cin>>a;
    for(int i=1;i<=a;i++){
        sum+=i;
    }
    std::cout<<"the sum of 1 to "<<a<<" is "<<sum<<"\n";
    return 0;
}