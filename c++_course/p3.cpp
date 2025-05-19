#include<iostream>
int add(int a,int b){
    
  int sum = a+b;
  return sum;  
}
int main(){
   
    int a ,b;
    int sum;
    std::cout<<"enter the value of a"<<"\n";
   std:: cin>>a;
   std::cout<<"enter the value of b"<<"\n";
   std::cin>>b;
   
   std::cout<<"the sume of a and b is :"<<add(a,b)<<"\n";
   return 0;

}