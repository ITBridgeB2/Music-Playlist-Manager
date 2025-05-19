#include<iostream>
int main(){
    int n=4;
    for(int i=1;i<=n;i++){
        for(int j=n-i;j>=1;j--){
        std::cout<<" ";
        }
        for(int k=1;k<=i;k++){
            std::cout<<k;
        }
        for(int m=i-1;m>=1;m--){
            std::cout<<m;
        }
        
       
     std::cout<<"\n";
    }
}