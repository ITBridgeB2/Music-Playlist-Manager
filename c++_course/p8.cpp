#include<iostream>
int main(){
    char alp;
    std::cout<<"enter the character"<<"\n";
    std::cin>>alp;
    int value = alp;
    
    if(value>=65&&value<=90){
    std::cout<<"the charecter is uppercase"<<"\n";
    }
    else if(value>=97&&value<=122){
        std::cout<<"the character is lowercase"<<"\n";
    }
    else{
        std::cout<<"the caracter is not an alphabet"<<"\n";
    }
    return 0;
}