#include<iostream>
int main(){
int num;
int prod =1;
int sqr = 1;
std::cout<<"enter the value of n : ";
std::cin>>num;

for(int i=1;i<=num;i++){
sqr = i*i;
prod +=sqr;
std::cout<<sqr;
if(i!=num){
    std::cout<<"+";
}
}
std::cout<<"="<<prod;

return 0;

}