#include<iostream>
int main(){
    int rows = 8;
     char star='*';
    for (int i=1;i<=rows;i++)
    {
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