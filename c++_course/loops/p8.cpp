#include<iostream>
int main()
{
    int rows= 5;
    char star='*';
    for(int i=rows;i>=1;i--){
        for(int j=1;j<=rows-i;j++){
            std::cout<<" ";
        }
        for(int k=1;k<=(2*i-1);k++){
            std::cout<<star;
        }
        std::cout<<"\n";
    }
    return 0;
}