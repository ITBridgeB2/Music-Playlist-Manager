//i=0
/*#include<iostream>
int  main(){
    int n=5;

    for(int i=0;i<n;i++){
    for(int j=(n-i)-1;j>=1;j--){
        std::cout<<" ";
    }
    for(int k=1;k<=2*i+1;k++
    ){
        std::cout<<"*";
    }
    std::cout<<"\n";
    }
}*/
//i=1
#include<iostream>
int main(){
    int n=4;
    for(int i=1;i<=n;i++){
        for(int j=n-i;j>=1;j--){
            std::cout<<" ";
        }
        for(int k=1;k<=(2*i)-1;k++){
            std::cout<<"*";
        }
        std::cout<<"\n";
    }
}