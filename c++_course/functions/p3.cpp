#include<iostream>
int min(int a,int b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
int main(){
    std::cout<<min(12,4);

}