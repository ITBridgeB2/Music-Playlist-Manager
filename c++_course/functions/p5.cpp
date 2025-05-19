#include<iostream>
void printNumbers(){
    int n; 
    std::cout<<"enter the value of n :";
    std::cin>>n;
    for(int i=1;i<=n;i++){
     std::cout<<i<<"\n";
    }
}
int main(){
    
    printNumbers();
return 0;
}