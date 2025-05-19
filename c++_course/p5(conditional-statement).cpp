#include<iostream>
int prod(int a , int b){
    int product=a*b;
    return product;
}
int main(){
    int a,b;
    std::cout<<"enter the value of a :"<<"\n";
    std::cin>>a;
    std::cout<<"enter the value of b :"<<"\n";
    std::cin>>b;
    if(a<=0||b<=0){
        std::cout<<"enter non negative numbers"<<"\n";
    }
    else{
    std::cout<<"the product of "<<a<<" and "<<b<<" is "<<prod(a,b)<<"\n";
}

}