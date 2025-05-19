#include<iostream>
int main(){
    char star;
    int rows;
    int cols;
    std::cout<<"enter the length of rectangle : "<<"\n";
    std::cin>>cols;
    std::cout<<"enter the width of the rectangle : "<<"\n";
    std::cin>>rows;
    std::cout<<"enter the character you want to print : "<<"\n";
    std::cin>>star;

    for(int i=1;i<=rows;i++){
        for(int j=1;j<=cols;j++){
        if(i==1||i==rows||j==1||j==cols){
        
        std::cout<<star;
        }
        else{
            
        
                std::cout<<" ";
            }
        }
        std::cout<<"\n";
    }
}