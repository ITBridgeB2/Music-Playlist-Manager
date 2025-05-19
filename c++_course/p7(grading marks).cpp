#include<iostream>
int main(){
    int marks;
    std::cout<<"enter the marks"<<"\n";
    std::cin>>marks;
    if(marks>=90){
        std::cout<<"your grade is A+"<<"\n";

    }
    else if(marks>=75){
        std::cout<<"your grade is A"<<"\n";

    }
    else if(marks>=65){
        std::cout<<"your grade is B+"<<"\n";
        
    }
    else if(marks>=50){
        std::cout<<"your grade is B"<<"\n";
        
    }
    else{
        std::cout<<"study better and get good grades"<<"\n";
    }
    return 0;
}