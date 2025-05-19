#include<iostream>
int main(){
    int num=20;
    int sum=0;
    for(int i=1;i<=num;i++){
        if(i%2!=0){
            sum+=i;
            std::cout<<sum<<"\n";
       

        }
        
    }
    return 0;
}