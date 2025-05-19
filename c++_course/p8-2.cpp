#include<iostream>
int main(){
    char alp;
    std::cout<<"enter the alphabet"<<"\n";
    std::cin>>alp;
    if(alp>='a'&&alp<='z'){
        std::cout<<"the character is lowercase"<<"\n";

    }
    else
    {
        std::cout<<"the character is uppercase"<<"\n";
    }
    return 0;
}