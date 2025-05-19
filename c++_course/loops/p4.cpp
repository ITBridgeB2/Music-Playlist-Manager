#include<iostream>
int main(){
    int num;
    int mult;
    std::cout<<"enter the table to be printed"<<"\n";
    std::cin>>num;
    for(int i=1;i<=10;i++){
      mult = num*i;
     std::cout<<num<<"X"<<i<<"="<<mult<<"\n";   
    }

}