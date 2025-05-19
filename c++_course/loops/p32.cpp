//butter fly pattern
#include<iostream>
int main(){
    int n=4;
    //uper part
    for(int i=0;i<n;i++){
        for(int j=1;j<=i+1;j++){
            std::cout<<"*";
        }
        for(int k=(n+2)-(i+i);k>=1;k--){
            std::cout<<" ";
        }
        for(int m=1;m<=i+1;m++){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }
    //lower part
    for(int i=n-1;i>=0;i--){
        for(int j=i+1;j>=1;j--){
            std::cout<<"*";
        }
        for(int k=0;k<(n+2)-(i+i);k++){
            std::cout<<" ";
        }
        for(int m=i+1;m>=1;m--){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }

    return 0;
}