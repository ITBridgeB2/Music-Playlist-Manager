#include<iostream>
int main(){
    std::cout<<"odd numbers : ";
    for (int i=1;i<=15;i++){
        if(i%2!=0){
        std::cout<<i<<" ";
        }
        
        
    }
    std::cout<<"\n";
    std::cout<<"even numbers : ";
    for(int i=1;i<15;i++){
        if(i%2==0){
            std::cout<<i<<" ";
        }
    }
    return 0;
}