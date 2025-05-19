#include<iostream>
int main(){
    int n = 5;
    for(int i=0;i<n;i++){
        for(int j=(n-i)-1;j>=1;j--){
       std::cout<<" ";
        }
        for(int k=1;k<=(2*i)+1;k++){
            if(i==0||i==n-1||k==1||k==(2*i)+1){
                std::cout<<"*";
            }
            else{
                std::cout<<" ";
            }
        }
        std::cout<<"\n";
    }
}
/* if(i!=0||i!=n-1||j==(n-i)-1||j>=1){
            std::cout<<" ";
        }
        else{
            std::cout<<"*";
        }*/