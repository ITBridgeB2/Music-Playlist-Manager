#include<iostream>
int  factorial(int n,int r){
    int fact =1;
    for(int i=n;i>=1;i--){
        fact *= i; 
        
    }
    return fact;
}
    int cfact(int n,int r) {
    int factor_n = factorial(n);
    int factor_r = factorial(r);
    int factor_nmr = factorial(n-r);
    return factor_n/(factor_r*factor_nmr);
    }

int main(){
    int n;
    int r;
    std::cout<<"enter the value of n :";
    std::cin>>n;
    std::cout<<"enter the value of r :";
    std::cin>>r;
    std::cout<<cfact(n,r);
    return 0;

}