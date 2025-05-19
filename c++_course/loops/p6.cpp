#include<iostream>
int main(){
    char star ='*';
   for(int i=1; i<=10;i++){
    for(int j=1;j<=i;j++){
        std::cout<<star;
        
    }
    std::cout<<"\n";
   } 
}