#include<iostream>
int main(){
    int num =1;
    int n=3;
    for(int i =0; i<n;i++){
        for(int j=0;j<n;j++)
        {
            std::cout<<num;
            num++;
        }
        std::cout<<"\n";
    }
}